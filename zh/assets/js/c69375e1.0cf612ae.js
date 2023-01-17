"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[3693],{3905:function(n,e,t){t.d(e,{Zo:function(){return p},kt:function(){return c}});var r=t(7294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var m=r.createContext({}),s=function(n){var e=r.useContext(m),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},p=function(n){var e=s(n.components);return r.createElement(m.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,i=n.originalType,m=n.parentName,p=l(n,["components","mdxType","originalType","parentName"]),d=s(t),c=a,g=d["".concat(m,".").concat(c)]||d[c]||u[c]||i;return t?r.createElement(g,o(o({ref:e},p),{},{components:t})):r.createElement(g,o({ref:e},p))}));function c(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var m in e)hasOwnProperty.call(e,m)&&(l[m]=e[m]);l.originalType=n,l.mdxType="string"==typeof n?n:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4355:function(n,e,t){t.r(e),t.d(e,{assets:function(){return p},contentTitle:function(){return m},default:function(){return y},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var r=t(3117),a=t(102),i=(t(7294),t(3905)),o=["components"],l={sidebar_position:5,title:"\u4f7f\u7528spring boot starter"},m=void 0,s={unversionedId:"jimmer-sql/spring-boot",id:"jimmer-sql/spring-boot",title:"\u4f7f\u7528spring boot starter",description:"\u672c\u6587\u4ecb\u7ecd\u7ecf\u8fc7spring-boot-starter\u548cspring-data\u5927\u5e45\u7b80\u5316\u540e\u7684\u7528\u6cd5\uff0c",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/jimmer-sql/spring-boot.mdx",sourceDirName:"jimmer-sql",slug:"/jimmer-sql/spring-boot",permalink:"/jimmer/zh/docs/jimmer-sql/spring-boot",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/jimmer-sql/spring-boot.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"\u4f7f\u7528spring boot starter"},sidebar:"tutorialSidebar",previous:{title:"\u5168\u5c40\u8fc7\u6ee4\u5668",permalink:"/jimmer/zh/docs/jimmer-sql/advanced/filter"},next:{title:"\u5bf9Spring GraphQL\u7684\u652f\u6301",permalink:"/jimmer/zh/docs/jimmer-sql/spring-graphql"}},p={},u=[{value:"\u5f15\u5165\u4f9d\u8d56",id:"\u5f15\u5165\u4f9d\u8d56",level:2},{value:"\u6570\u636e\u5e93\u521d\u59cb\u5316\u811a\u672c",id:"\u6570\u636e\u5e93\u521d\u59cb\u5316\u811a\u672c",level:2},{value:"\u5b9a\u4e49\u5b9e\u4f53",id:"\u5b9a\u4e49\u5b9e\u4f53",level:2},{value:"\u57fa\u672c\u914d\u7f6e",id:"\u57fa\u672c\u914d\u7f6e",level:2},{value:"\u5efa\u7acb\u6570\u636e\u5e93",id:"\u5efa\u7acb\u6570\u636e\u5e93",level:3}],d=function(n){return function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}},c=d("Tabs"),g=d("TabItem"),b={toc:u};function y(n){var e=n.components,t=(0,a.Z)(n,o);return(0,i.kt)("wrapper",(0,r.Z)({},b,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u7ecf\u8fc7spring-boot-starter\u548cspring-data\u5927\u5e45\u7b80\u5316\u540e\u7684\u7528\u6cd5\uff0c"),(0,i.kt)("p",null,"\u672c\u6587\u7684\u91cd\u70b9"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u670d\u52a1\u7aef\u6d88\u706dDTO"),(0,i.kt)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u91cd\u73b0DTO")),(0,i.kt)("p",null,"\u901a\u8fc7\u8fd9\u6837\u7684\u7ec4\u5408\uff0c\u53ef\u4ee5\u4e86\u89e3\u5728REST\u5f00\u53d1\u6a21\u5f0f\u4e0b\uff0cJimmer\u5982\u4f55\u89e3\u51b3DTO\u7206\u70b8\u5e26\u6765\u7684\u96be\u9898\u3002"),(0,i.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u8bf7\u53c2\u8003"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"B\u7ad9\u89c6\u9891\uff1a",(0,i.kt)("a",{parentName:"li",href:"https://www.bilibili.com/video/BV1wD4y1L7xr/"},"https://www.bilibili.com/video/BV1wD4y1L7xr/")),(0,i.kt)("li",{parentName:"ul"},"\u672c\u6846\u67b6\u81ea\u5e26\u7684example: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/babyfish-ct/jimmer/tree/main/example/java/jimmer-sql"},"jimmer-sql"),"\u6216",(0,i.kt)("a",{parentName:"li",href:"https://github.com/babyfish-ct/jimmer/tree/main/example/kotlin/jimmer-sql-kt"},"jimmer-sql-kt"))),(0,i.kt)("h2",{id:"\u5f15\u5165\u4f9d\u8d56"},"\u5f15\u5165\u4f9d\u8d56"),(0,i.kt)("p",null,"\u9996\u5148\uff0c\u5efa\u7acb\u4e00\u4e2a\u7a7a\u767d\u7684spring-boot\u9879\u76ee\uff0c\u6dfb\u52a0\u5982\u4e0b\u4f9d\u8d56"),(0,i.kt)(c,{groupId:"buildScript",mdxType:"Tabs"},(0,i.kt)(g,{value:"java",label:"Java(Gradle)",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-groovy",metastring:'title="build.gradle"',title:'"build.gradle"'},"depdencies {\n    \n    implementation 'org.babyfish.jimmer:jimmer-spring-boot-starter-:0.6.21'\n    annotationProcessor 'org.babyfish.jimmer:jimmer-apt:0.6.21'\n\n    runtimeOnly 'com.h2database:h2:2.1.212'\n}\n"))),(0,i.kt)(g,{value:"java-maven",label:"Java(Maven)",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<dependencies>\n    <dependency>\n        <groupId>org.babyfish.jimmer</groupId>\n        <artifactId>jimmer-spring-boot-starter</artifactId>\n        <version>0.6.21</version>\n    </dependency>\n    <dependency>\n        <groupId>com.h2database</groupId>\n        <artifactId>h2</artifactId>\n        <version>2.1.212</version>\n        <scope>runtime</scope>\n    </dependency>\n</dependencies>\n\n<build>\n    <plugins>\n        <plugin>\n            <groupId>org.apache.maven.plugins</groupId>\n            <artifactId>maven-compiler-plugin</artifactId>\n            <version>3.10.1</version>\n            <configuration>\n                <annotationProcessorPaths>\n                    <path>\n                        <groupId>org.babyfish.jimmer</groupId>\n                        <artifactId>jimmer-apt</artifactId>\n                        <version>0.6.21</version>\n                    </path>\n                </annotationProcessorPaths>\n            </configuration>\n        </plugin>\n    </plugins>\n</build>\n"))),(0,i.kt)(g,{value:"kotlin",label:"Kotlin(Gradle)",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="build.gradle.kts"',title:'"build.gradle.kts"'},'plugins {\n    id("com.google.devtools.ksp") version "1.7.10-1.0.6"\n\n    ...ommit other plugins...\n}\ndepdencies {\n    \n    implementation("org.babyfish.jimmer:jimmer-spring-boot-starter:0.6.21")\n    ksp("org.babyfish.jimmer:jimmer-ksp:0.6.21")\n\n    runtimeOnly("com.h2database:h2:2.1.212")\n\n    ...ommit other dependency...\n}\n\n// \u5c06\u751f\u6210\u7684\u4ee3\u7801\u6dfb\u52a0\u5230\u7f16\u8bd1\u76ee\u5f55\u4e2d\u3002\n// \u6ca1\u6709\u8fd9\u4e2a\u914d\u7f6e\uff0cgradle\u547d\u4ee4\u4ecd\u7136\u53ef\u4ee5\u6b63\u5e38\u6267\u884c\uff0c\n// \u4f46\u662f, Intellij\u65e0\u6cd5\u627e\u5230\u751f\u6210\u7684\u6e90\u7801\u3002\nkotlin {\n    sourceSets.main {\n        kotlin.srcDir("build/generated/ksp/main/kotlin")\n    }\n}\n'))),(0,i.kt)(g,{value:"kotlin-maven",label:"Kotlin(Maven)",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="pom.xml"',title:'"pom.xml"'},"\n<dependencies>\n    <dependency>\n        <groupId>org.babyfish.jimmer</groupId>\n        <artifactId>jimmer-spring-boot-starter</artifactId>\n        <version>0.6.21</version>\n    </dependency>\n    <dependency>\n        <groupId>com.h2database</groupId>\n        <artifactId>h2</artifactId>\n        <version>2.1.212</version>\n        <scope>runtime</scope>\n    </dependency>\n</dependencies>\n\n<build>\n    <sourceDirectory>src/main/kotlin</sourceDirectory>\n    <testSourceDirectory>src/test/kotlin</testSourceDirectory>\n\n    <plugins>\n        <plugin>\n            <groupId>org.jetbrains.kotlin</groupId>\n            <artifactId>kotlin-maven-plugin</artifactId>\n            <version>${kotlin.version}</version>\n            <executions>\n                <execution>\n                    <id>compile</id>\n                    <phase>compile</phase>\n                    <goals>\n                        <goal>compile</goal>\n                    </goals>\n                </execution>\n                <execution>\n                    <id>test-compile</id>\n                    <phase>test-compile</phase>\n                    <goals>\n                        <goal>test-compile</goal>\n                    </goals>\n                </execution>\n            </executions>\n            <configuration>\n                <compilerPlugins>\n                    <compilerPlugin>ksp</compilerPlugin>\n                </compilerPlugins>\n            </configuration>\n            <dependencies>\n                <dependency>\n                    <groupId>com.dyescape</groupId>\n                    <artifactId>kotlin-maven-symbol-processing</artifactId>\n                    <version>1.3</version>\n                </dependency>\n                <dependency>\n                    <groupId>org.babyfish.jimmer</groupId>\n                    <artifactId>jimmer-ksp</artifactId>\n                    <version>0.6.21</version>\n                </dependency>\n            </dependencies>\n        </plugin>\n    </plugins>\n</build>\n")))),(0,i.kt)("h2",{id:"\u6570\u636e\u5e93\u521d\u59cb\u5316\u811a\u672c"},"\u6570\u636e\u5e93\u521d\u59cb\u5316\u811a\u672c"),(0,i.kt)("h2",{id:"\u5b9a\u4e49\u5b9e\u4f53"},"\u5b9a\u4e49\u5b9e\u4f53"),(0,i.kt)(c,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(g,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookStore.java"',title:'"BookStore.java"'},'package org.babyfish.jimmer.sql.example.model;\n\nimport javax.validation.constraints.Null;\nimport java.util.List;\n\nimport org.babyfish.jimmer.sql.Entity;\nimport org.babyfish.jimmer.sql.Id;\nimport org.babyfish.jimmer.sql.OneToMany;\nimport org.babyfish.jimmer.sql.Key;\n\n@Entity\npublic interface BookStore {\n\n    @Id\n    long id();\n\n    @Key\n    String name();\n\n    @Null\n    String website();\n\n    @OneToMany(mappedBy = "store")\n    List<Book> books();\n}\n'))),(0,i.kt)(g,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="BookStore.kt"',title:'"BookStore.kt"'},'package org.babyfish.jimmer.sql.example.model\n\nimport org.babyfish.jimmer.sql.Entity\nimport org.babyfish.jimmer.sql.Id\nimport org.babyfish.jimmer.sql.OneToMany\nimport org.babyfish.jimmer.sql.Key\n\n@Entity\npublic interface BookStore {\n\n    @Id\n    val id: Long\n\n    @Key\n    val name: String\n\n    val website: String?\n\n    @OneToMany(mappedBy = "store")\n    val books: List<Book>\n}\n')))),(0,i.kt)(c,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(g,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},'package org.babyfish.jimmer.sql.example.model;\n\nimport javax.validation.constraints.Null;\nimport java.math.BigDecimal;\nimport java.util.List;\n\nimport org.babyfish.jimmer.sql.Entity;\nimport org.babyfish.jimmer.sql.JoinColumn;\nimport org.babyfish.jimmer.sql.Key;\nimport org.babyfish.jimmer.sql.ManyToOne;\nimport org.babyfish.jimmer.sql.ManyToMany;\n\n@Entity\npublic interface Book {\n\n    @Id\n    long id();\n\n    @Key\n    String name();\n\n    @Key\n    int edition();\n\n    BigDecimal price();\n\n    @Null\n    @ManyToOne(optional = true)\n    BookStore store();\n\n    @ManyToMany\n    @JoinTable(\n            name = "BOOK_AUTHOR_MAPPING",\n            joinColumnName = "BOOK_ID",\n            inverseJoinColumnName = "AUTHOR_ID"\n    )\n    List<Author> authors();\n}\n'))),(0,i.kt)(g,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Book.kt"',title:'"Book.kt"'},'package org.babyfish.jimmer.sql.example.model\n\nimport java.math.BigDecimal\nimport java.util.UUID\n\nimport org.babyfish.jimmer.sql.Entity\nimport org.babyfish.jimmer.sql.JoinColumn\nimport org.babyfish.jimmer.sql.Key\nimport org.babyfish.jimmer.sql.ManyToOne\nimport org.babyfish.jimmer.sql.ManyToMany\n\n@Entity\npublic interface Book {\n\n    @Id\n    val id: Long\n\n    @Key\n    val name: String\n\n    @Key\n    val edition: Int\n\n    val price: BigDecimal\n\n    @ManyToOne(optional = true)\n    val store: BookStore?\n\n    @ManyToMany\n    @JoinTable(\n            name = "BOOK_AUTHOR_MAPPING",\n            joinColumns = @JoinColumn(name = "BOOK_ID"),\n            inverseJoinColumns = @JoinColumn(name = "AUTHOR_ID")\n    )\n    val authors: List<Author>\n}\n')))),(0,i.kt)(c,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(g,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Author.java"',title:'"Author.java"'},'package org.babyfish.jimmer.sql.example.model;\n\nimport java.util.List;\nimport org.babyfish.jimmer.sql.Entity;\nimport org.babyfish.jimmer.sql.Key;\nimport org.babyfish.jimmer.sql.ManyToMany;\n\n@Entity\npublic interface Author {\n\n    @Id\n    long id();\n\n    @Key\n    String firstName();\n\n    @Key\n    String lastName();\n\n    Gender gender();\n\n    @ManyToMany(mappedBy = "authors")\n    List<Book> books();\n}\n'))),(0,i.kt)(g,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Author.kt"',title:'"Author.kt"'},'package org.babyfish.jimmer.sql.example.model\n\nimport org.babyfish.jimmer.sql.Entity\nimport org.babyfish.jimmer.sql.Key\nimport org.babyfish.jimmer.sql.ManyToMany\n\n@Entity\npublic interface Author {\n\n    @Id\n    val id: Long\n\n    @Key\n    val firstName: String\n\n    @Key\n    val lastName: String\n\n    val gender: Gender\n\n    @ManyToMany(mappedBy = "authors")\n    val books: List<Book>\n}\n')))),(0,i.kt)("p",null,"Author\u7c7b\u4e2d\u4f7f\u7528\u4e86\u4e00\u4e2aGender\u7c7b\u578b\uff0c\u8fd9\u662f\u4e00\u4e2a\u679a\u4e3e\u7c7b\u578b\uff0c\u5176\u5b9a\u4e49\u5982\u4e0b"),(0,i.kt)(c,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(g,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Gender.java"',title:'"Gender.java"'},"package org.babyfish.jimmer.sql.example.model;\n\npublic enum Gender {\n    MALE,\n    FEMALE\n}\n"))),(0,i.kt)(g,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Gender.kt"',title:'"Gender.kt"'},"package org.babyfish.jimmer.sql.example.model\n\nenum class Gender {\n    MALE,\n    FEMALE\n}\n")))),(0,i.kt)("h2",{id:"\u57fa\u672c\u914d\u7f6e"},"\u57fa\u672c\u914d\u7f6e"),(0,i.kt)("h3",{id:"\u5efa\u7acb\u6570\u636e\u5e93"},"\u5efa\u7acb\u6570\u636e\u5e93"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"\u672a\u5b8c\u5f85\u7eed")))}y.isMDXComponent=!0}}]);