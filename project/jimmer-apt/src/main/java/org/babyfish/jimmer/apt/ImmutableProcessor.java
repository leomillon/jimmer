package org.babyfish.jimmer.apt;

import org.babyfish.jimmer.apt.generator.*;
import org.babyfish.jimmer.apt.meta.ImmutableType;
import org.babyfish.jimmer.apt.meta.MetaException;
import org.babyfish.jimmer.apt.meta.StaticDeclaration;
import org.babyfish.jimmer.sql.Entity;

import javax.annotation.processing.*;
import javax.lang.model.SourceVersion;
import javax.lang.model.element.Element;
import javax.lang.model.element.ElementKind;
import javax.lang.model.element.PackageElement;
import javax.lang.model.element.TypeElement;
import javax.tools.Diagnostic;
import java.util.*;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

@SupportedAnnotationTypes({
        "org.babyfish.jimmer.Immutable",
        "org.babyfish.jimmer.sql.Entity",
        "org.babyfish.jimmer.sql.MappedSuperclass"
})
@SupportedSourceVersion(SourceVersion.RELEASE_8)
public class ImmutableProcessor extends AbstractProcessor {

    private TypeUtils typeUtils;

    private Filer filer;

    private String[] includes = null;

    private String[] excludes = null;

    private Messager messager;

    private boolean processed;

    @Override
    public synchronized void init(ProcessingEnvironment processingEnv) {
        super.init(processingEnv);
        messager = processingEnv.getMessager();
        String includes = processingEnv.getOptions().get("jimmer.source.includes");
        String excludes = processingEnv.getOptions().get("jimmer.source.excludes");
        if (includes != null && !includes.isEmpty()) {
            this.includes = includes.trim().split("\\s*,\\s*");
        }
        if (excludes != null && !excludes.isEmpty()) {
            this.excludes = excludes.trim().split("\\s*,\\s*");
        }
        typeUtils = new TypeUtils(
                processingEnv.getElementUtils(),
                processingEnv.getTypeUtils()
        );
        filer = processingEnv.getFiler();
    }

    @Override
    public boolean process(
            Set<? extends TypeElement> annotations,
            RoundEnvironment roundEnv
    ) {
        if (!processed) {
            processed = true;
        } else {
            return true;
        }

        List<TypeElement> typeElements = new ArrayList<>();
        Map<String, ImmutableType> simpleNameMap = new HashMap<>();
        Map<String, ImmutableType> staticSimpleNameMap = new HashMap<>();
        for (Element element : roundEnv.getRootElements()) {
            if (element instanceof TypeElement) {
                TypeElement typeElement = (TypeElement) element;
                String qualifiedName = typeElement.getQualifiedName().toString();
                if (includes != null) {
                    boolean matched = false;
                    for (String include : includes) {
                        if (qualifiedName.startsWith(include)) {
                            matched = true;
                            break;
                        }
                    }
                    if (!matched) {
                        continue;
                    }
                }
                if (excludes != null) {
                    boolean matched = false;
                    for (String exclude : excludes) {
                        if (qualifiedName.startsWith(exclude)) {
                            matched = true;
                            break;
                        }
                    }
                    if (matched) {
                        continue;
                    }
                }
                if (typeUtils.isImmutable(typeElement)) {
                    if (typeElement.getKind() != ElementKind.INTERFACE) {
                        throw new MetaException(
                                "Illegal class \"" +
                                        typeElement.getQualifiedName().toString() +
                                        "\", immutable type must be interface"
                        );
                    }
                    ImmutableType immutableType = typeUtils.getImmutableType(typeElement);
                    typeElements.add(typeElement);
                    simpleNameMap.put(typeElement.getSimpleName().toString(), immutableType);
                }
            }
        }
        for (TypeElement typeElement : typeElements) {
            typeUtils.getImmutableType(typeElement).resolve(typeUtils);
        }
        for (TypeElement typeElement : typeElements) {
            ImmutableType immutableType = typeUtils.getImmutableType(typeElement);
            if (immutableType.isEntity()) {
                for (StaticDeclaration declaration : immutableType.getStaticDeclarationMap().values()) {
                    String topLevelName = declaration.getTopLevelName();
                    if (!topLevelName.isEmpty()) {
                        ImmutableType conflictImmutableType = simpleNameMap.get(topLevelName);
                        if (conflictImmutableType != null) {
                            throw new MetaException(
                                    "Illegal type \"" +
                                            immutableType.getQualifiedName() +
                                            "\", it declares static type \"" +
                                            topLevelName +
                                            "\", this simple name is conflict with the immutable type \"" +
                                            conflictImmutableType.getQualifiedName() +
                                            "\""
                            );
                        }
                        conflictImmutableType =
                                staticSimpleNameMap.put(topLevelName, immutableType);
                        if (conflictImmutableType != null) {
                            throw new MetaException(
                                    "Duplicated static type \"" +
                                            topLevelName +
                                            "\" declared in \"" +
                                            immutableType.getQualifiedName() +
                                            "\"" +
                                            (
                                                    conflictImmutableType != immutableType ?
                                                            "and \"" +
                                                                    conflictImmutableType.getQualifiedName() +
                                                                    "\"" :
                                                            ""
                                            )
                            );
                        }
                    }
                }
            }
        }
        for (TypeElement typeElement : typeElements) {
            ImmutableType immutableType = typeUtils.getImmutableType(typeElement);
            new DraftGenerator(
                    immutableType,
                    filer
            ).generate();
            new PropsGenerator(
                    typeUtils,
                    immutableType,
                    filer
            ).generate();
            messager.printMessage(Diagnostic.Kind.NOTE, "Immutable: " + immutableType.getQualifiedName());
            if (immutableType.isEntity()) {
                messager.printMessage(Diagnostic.Kind.NOTE, "Entity: " + immutableType.getQualifiedName());
                new TableGenerator(
                        typeUtils,
                        immutableType,
                        false,
                        filer
                ).generate();
                new TableGenerator(
                        typeUtils,
                        immutableType,
                        true,
                        filer
                ).generate();
                new FetcherGenerator(
                        typeUtils,
                        immutableType,
                        filer
                ).generate();
                for (StaticDeclaration declaration : immutableType.getStaticDeclarationMap().values()) {
                    if (!declaration.getTopLevelName().isEmpty()) {
                        new StaticDeclarationGenerator(
                                declaration,
                                filer
                        ).generate();
                    }
                }
            } else if (immutableType.isEmbeddable()) {
                new PropExpressionGenerator(
                        typeUtils,
                        immutableType,
                        filer
                ).generate();
            }
        }
        messager.printMessage(Diagnostic.Kind.NOTE, "JimmerModule");
        PackageCollector packageCollector = new PackageCollector();
        for (Element element : roundEnv.getElementsAnnotatedWith(Entity.class)) {
            packageCollector.accept((TypeElement) element);
        }
        new JimmerModuleGenerator(
                packageCollector.toString(),
                packageCollector.getTypeElements(),
                filer
        ).generate();
        return true;
    }

    private static class PackageCollector {

        private static final Pattern DOT_PATTERN = Pattern.compile("\\.");

        private List<String> paths;

        private String str;

        private List<TypeElement> typeElements = new ArrayList<>();

        public void accept(TypeElement typeElement) {
            typeElements.add(typeElement);
            if (paths != null && paths.isEmpty()) {
                return;
            }
            str = null;
            List<String> newPaths = Collections.emptyList();
            for (Element parent = typeElement.getEnclosingElement(); parent != null; parent = parent.getEnclosingElement()) {
                if (parent instanceof PackageElement) {
                    String packageName = ((PackageElement) parent).getQualifiedName().toString();
                    newPaths = new ArrayList<>(Arrays.asList(DOT_PATTERN.split(packageName)));
                    break;
                }
            }
            if (paths == null) {
                paths = newPaths;
            } else {
                int len = Math.min(paths.size(), newPaths.size());
                int index = 0;
                while (index < len) {
                    if (!paths.get(index).equals(newPaths.get(index))) {
                        break;
                    }
                    index++;
                }
                if (index < paths.size()) {
                    paths.subList(index, paths.size()).clear();
                }
            }
        }

        public List<TypeElement> getTypeElements() {
            return Collections.unmodifiableList(typeElements);
        }

        @Override
        public String toString() {
            String s = str;
            if (s == null) {
                List<String> ps = paths;
                str = s = ps == null || ps.isEmpty() ? "" : String.join(".", ps);
            }
            return s;
        }
    }
}
