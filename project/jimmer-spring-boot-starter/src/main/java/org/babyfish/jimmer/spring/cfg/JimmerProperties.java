package org.babyfish.jimmer.spring.cfg;

import org.babyfish.jimmer.sql.JSqlClient;
import org.babyfish.jimmer.sql.dialect.DefaultDialect;
import org.babyfish.jimmer.sql.dialect.Dialect;
import org.babyfish.jimmer.sql.event.TriggerType;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.ConstructorBinding;

import java.lang.reflect.InvocationTargetException;

@ConstructorBinding
@ConfigurationProperties("jimmer")
public class JimmerProperties {

    @NotNull
    private final String language;

    @NotNull
    private final Dialect dialect;

    @NotNull
    private final boolean showSql;

    @NotNull
    private final TriggerType triggerType;

    private final int defaultBatchSize;

    private final int defaultListBatchSize;

    @NotNull
    private final Client client;

    public JimmerProperties(
            @Nullable String language,
            @Nullable String dialect,
            boolean showSql,
            @Nullable TriggerType triggerType,
            @Nullable Integer defaultBatchSize,
            @Nullable Integer defaultListBatchSize,
            @Nullable Client client
    ) {
        if (language == null) {
            this.language = "java";
        } else {
            if (!language.equals("java") && !language.equals("kotlin")) {
                throw new IllegalArgumentException("`jimmer.language` must be \"java\" or \"kotlin\"");
            }
            this.language = language;
        }
        if (dialect == null) {
            this.dialect = new DefaultDialect();
        } else {
            Class<?> clazz;
            try {
                clazz = Class.forName(dialect, true, Dialect.class.getClassLoader());
            } catch (ClassNotFoundException ex) {
                throw new IllegalArgumentException(
                        "The class \"" +
                                dialect +
                                "\" specified by `jimmer.language` cannot be found"
                );
            }
            if (!Dialect.class.isAssignableFrom(clazz) || clazz.isInterface()) {
                throw new IllegalArgumentException(
                        "The class \"" +
                                dialect +
                                "\" specified by `jimmer.language` must be a valid dialect implementation"
                );
            }
            try {
                this.dialect = (Dialect) clazz.getConstructor().newInstance();
            } catch (InvocationTargetException ex) {
                throw new IllegalArgumentException(
                        "Create create instance for the class \"" +
                                dialect +
                                "\" specified by `jimmer.language`",
                        ex.getTargetException()
                );
            } catch (Exception ex) {
                throw new IllegalArgumentException(
                        "Create create instance for the class \"" +
                                dialect +
                                "\" specified by `jimmer.language`",
                        ex
                );
            }
        }
        this.showSql = showSql;
        this.triggerType = triggerType != null ? triggerType : TriggerType.BINLOG_ONLY;
        this.defaultBatchSize =
                defaultBatchSize != null ?
                        defaultBatchSize :
                        JSqlClient.Builder.DEFAULT_BATCH_SIZE;
        this.defaultListBatchSize =
                defaultListBatchSize != null ?
                        defaultListBatchSize :
                        JSqlClient.Builder.DEFAULT_LIST_BATCH_SIZE;
        if (client == null) {
            this.client = new Client(null, null);
        } else {
            this.client = client;
        }
    }

    @NotNull
    public String getLanguage() {
        return language;
    }

    @NotNull
    public Dialect getDialect() {
        return dialect;
    }

    public boolean isShowSql() {
        return showSql;
    }

    @NotNull
    public TriggerType getTriggerType() {
        return triggerType;
    }

    public int getDefaultBatchSize() {
        return defaultBatchSize;
    }

    public int getDefaultListBatchSize() {
        return defaultListBatchSize;
    }

    @NotNull
    public Client getClient() {
        return client;
    }

    @Override
    public String toString() {
        return "JimmerProperties{" +
                "language='" + language + '\'' +
                ", dialect=" + dialect +
                ", showSql=" + showSql +
                ", triggerType=" + triggerType +
                ", defaultBatchSize=" + defaultBatchSize +
                ", defaultListBatchSize=" + defaultListBatchSize +
                ", client=" + client +
                '}';
    }

    @ConstructorBinding
    public static class Client {

        @NotNull
        private final TypeScript ts;

        @NotNull
        private final JavaFeign javaFeign;

        public Client(@Nullable TypeScript ts, @Nullable JavaFeign javaFeign) {
            if (ts == null) {
                this.ts = new TypeScript(null, "Api", 4, false);
            } else {
                this.ts = ts;
            }
            if (javaFeign == null) {
                this.javaFeign = new JavaFeign(null, "", 4, "");
            } else {
                this.javaFeign = javaFeign;
            }
        }

        @NotNull
        public TypeScript getTs() {
            return ts;
        }

        @NotNull
        public JavaFeign getJavaFeign() {
            return javaFeign;
        }

        @Override
        public String toString() {
            return "Client{" +
                    "ts=" + ts +
                    ", javaFeign=" + javaFeign +
                    '}';
        }

        @ConstructorBinding
        public static class TypeScript {

            @Nullable
            private final String path;

            @NotNull
            private final String apiName;

            private final int indent;

            private final boolean anonymous;

            public TypeScript(@Nullable String path, @Nullable String apiName, int indent, boolean anonymous) {
                if (path == null || path.isEmpty()) {
                    this.path = null;
                } else {
                    if (!path.startsWith("/")) {
                        throw new IllegalArgumentException("`jimmer.client.ts.path` must start with \"/\"");
                    }
                    this.path = path;
                }
                if (apiName == null || apiName.isEmpty()) {
                    this.apiName = "Api";
                } else {
                    this.apiName = apiName;
                }
                this.indent = indent != 0 ? Math.max(indent, 2) : 4;
                this.anonymous = anonymous;
            }

            @Nullable
            public String getPath() {
                return path;
            }

            @NotNull
            public String getApiName() {
                return apiName;
            }

            public int getIndent() {
                return indent;
            }

            public boolean isAnonymous() {
                return anonymous;
            }

            @Override
            public String toString() {
                return "TypeScript{" +
                        "path='" + path + '\'' +
                        ", anonymous=" + anonymous +
                        '}';
            }
        }

        @ConstructorBinding
        public static class JavaFeign {

            @Nullable
            private final String path;

            @NotNull
            private final String apiName;

            private final int indent;

            private final String basePackage;

            public JavaFeign(@Nullable String path, @Nullable String apiName, int indent, @Nullable String basePackage) {
                if (path == null || path.isEmpty()) {
                    this.path = null;
                } else {
                    if (!path.startsWith("/")) {
                        throw new IllegalArgumentException("`jimmer.client.ts.path` must start with \"/\"");
                    }
                    this.path = path;
                }
                if (apiName == null || apiName.isEmpty()) {
                    this.apiName = "Api";
                } else {
                    this.apiName = apiName;
                }
                this.indent = indent != 0 ? Math.max(indent, 2) : 4;
                if (basePackage == null || basePackage.isEmpty()) {
                    this.basePackage = "";
                } else {
                    this.basePackage = basePackage;
                }
            }

            @Nullable
            public String getPath() {
                return path;
            }

            @NotNull
            public String getApiName() {
                return apiName;
            }

            public int getIndent() {
                return indent;
            }

            public String getBasePackage() {
                return basePackage;
            }

            @Override
            public String toString() {
                return "JavaFeign{" +
                        "path='" + path + '\'' +
                        ", clientName='" + apiName + '\'' +
                        ", indent=" + indent +
                        ", basePackage=" + basePackage +
                        '}';
            }
        }
    }
}
