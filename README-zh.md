# Learn-Babel（中文说明）


Language : [🇺🇸 English](./README.md) | [🇨🇳 中文]

---

本项目是一个系统化、超详细的 Babel 学习与实战仓库，适合零基础到进阶开发者。内容涵盖：

- Babel 基础原理与转译演示
- Babel 配置文件详解（.babelrc、babel.config.js）
- preset、plugin 实战与自定义插件开发
- Polyfill 场景与配置
- AST 基础与 Babel 插件开发
- Babel 与 Webpack/Vite/主流框架（React/TS/Vue）集成
- 性能优化与调试技巧
- AI 场景创新案例
- 每个阶段均有详细注释、配套 markdown 文档、转译产物、实验文件

## 仓库结构与每个文件详细说明

- `01_babel_intro.js`：Babel 是什么？理论与简单例子。注释中中英对照，适合入门。
- `02_babel_install_and_run.js`：Babel 安装与转译实操，包含从初始化、依赖安装、配置、转译到运行的完整流程。
- `03_babel_config_explain.md`：Babel 配置文件详解，涵盖 .babelrc 和 babel.config.js 的区别、常用字段、实用建议、配置示例。
- `04_babel_preset_plugin_demo.js`：preset-env 和常用插件实操，演示如何配置和使用箭头函数、模板字符串等插件，配套转译产物。
- `05_babel_polyfill_demo.js`：Babel Polyfill 使用场景与配置，详细讲解 core-js、regenerator-runtime、useBuiltIns: 'usage' 的用法。
- `06_babel_with_webpack_demo.md`：Babel 与 Webpack 集成实操，包含依赖安装、babel.config.js、webpack.config.js 配置、打包与运行全流程。
- `07_babel_with_vite_demo.md`：Babel 与 Vite 集成实操，包含 Vite 项目入口、Babel 配置、index.html 示例、启动与调试说明。
- `08_babel_ast_basic.md`：Babel AST 基础与实操，介绍 AST 概念、常见节点、AST Explorer 可视化、Babel 插件 path 操作、手动分析与进阶建议。
- `09_babel_plugin_easy_demo.js`：简单 Babel 插件开发实战，手把手教你写插件（如变量名替换），并在 src/my-babel-plugin.js、src/plugin_test.js 配套演示。
- `10_babel_plugin_advanced_demo.js`：进阶 Babel 插件开发，自动为所有函数加日志，配套 src/my-advanced-babel-plugin.js、src/advanced_plugin_test.js。
- `11_babel_ai_audit_case_demo.js`：AI 场景创新案例，自动为带 @ai 注释的函数插入审计日志和参数类型校验，配套 src/ai-advanced-audit-plugin.js、src/ai_audit_case_test.js。
- `12_babel_performance_debug_tips.md`：Babel 性能优化与调试技巧，涵盖 preset/plugin 精准配置、缓存、调试、AST 工具等。
- `13_babel_with_framework_demo.md`：Babel 与主流框架（React/TS/Vue）结合实战，详细讲解各自依赖、配置、转译命令、组件示例。
- `babel.config.js`：全局 Babel 配置（ESModule 语法，适配 type: module），所有实操均以此为基础。
- `webpack.config.js`：Webpack 配置（ESModule 语法），支持 vue-loader、babel-loader，适配 type: module。
- `package.json`：包含所有 Babel、Webpack、Vite、React、TS、Vue 相关依赖，type: module。
- `src/`：源码目录，包含：
   - `index.js`：Webpack 打包入口，配合 06 教程。
   - `main.js`：Vite 启动入口，配合 07 教程。
   - `hello.jsx`：React JSX 示例，配合 13 教程。
   - `ts_demo.ts`：TypeScript 示例，配合 13 教程。
   - `Hello.vue`：Vue 单文件组件，配合 13 教程。
   - `my-babel-plugin.js`、`plugin_test.js`：简单插件与测试。
   - `my-advanced-babel-plugin.js`、`advanced_plugin_test.js`：进阶插件与测试。
   - `ai-advanced-audit-plugin.js`、`ai_audit_case_test.js`：AI 审计插件与测试。
   - 以及各阶段转译产物（*.transpiled.js），便于对比学习。
- `example_index.js`、`example_test.js`：Babel API 代码级调用与测试样例。
- `index.html`：Vite 项目入口页面。
- `dist/`：Webpack 打包输出目录。


---

## 快速开始（全流程演示）

1. 克隆仓库：
   ```bash
   git clone https://github.com/HowieCong/Learn-Babel.git
   cd Learn-Babel
   ```
2. 安装依赖（推荐 pnpm）：
   ```bash
   pnpm install
   # 或 npm install
   ```
3. 体验 Babel 转译：
   ```bash
   npx babel 02_babel_install_and_run.js -o 02_babel_install_and_run.transpiled.js
   node 02_babel_install_and_run.transpiled.js
   ```
4. 体验 Webpack 打包：
   ```bash
   pnpm exec webpack
   node dist/bundle.js
   ```
5. 体验 Vite 启动：
   ```bash
   pnpm exec vite
   # 浏览器访问 http://localhost:5173
   ```


---

## 学习路线与内容（每个阶段配套文件/文档）


1. **Babel 基础原理与作用**（见 01_babel_intro.js）：
   - 详细注释，理论+实践，ES6 箭头函数转译演示。
2. **Babel 安装与基本用法**（见 02_babel_install_and_run.js）：
   - 从零初始化、依赖安装、配置、转译、运行全流程。
3. **Babel 配置文件详解**（见 03_babel_config_explain.md）：
   - .babelrc vs babel.config.js 区别、常用字段、配置建议、实用示例。
4. **preset-env 与常用插件实操**（见 04_babel_preset_plugin_demo.js）：
   - 配置 preset、插件，体验箭头函数、模板字符串等转译。
5. **Polyfill 场景与配置**（见 05_babel_polyfill_demo.js）：
   - core-js、regenerator-runtime、useBuiltIns: 'usage' 按需引入，API 兼容性实战。
6. **Babel 与 Webpack 集成**（见 06_babel_with_webpack_demo.md，入口 src/index.js）：
   - 依赖安装、babel.config.js、webpack.config.js 配置、打包与运行。
7. **Babel 与 Vite 集成**（见 07_babel_with_vite_demo.md，入口 src/main.js）：
   - Vite 项目入口、Babel 配置、index.html 示例、启动与调试。
8. **AST 基础与 Babel 插件开发**（见 08_babel_ast_basic.md、09、10、11）：
   - AST 概念、节点类型、AST Explorer 可视化、插件 path 操作、手动分析。
   - 简单插件开发（变量名替换）、进阶插件（自动加日志）、AI 审计插件（注释解析、类型校验、插桩）。
9. **主流框架集成实战**（见 13_babel_with_framework_demo.md、src/hello.jsx、src/ts_demo.ts、src/Hello.vue）：
   - React（JSX）、TypeScript、Vue 单文件组件，依赖、配置、转译命令、组件示例。
10. **性能优化与调试技巧**（见 12_babel_performance_debug_tips.md）：
    - preset/plugin 精准配置、缓存、调试、AST 工具、常见问题排查。
11. **Babel API 代码级调用**（见 example_index.js、example_test.js）：
    - 直接用 @babel/core API 进行转译，适合自动化、脚本场景。
12. **更多实战与创新案例**：持续补充中，欢迎 PR。


---

## 配置与实践说明（全局与分阶段）


- Babel 配置统一采用 `babel.config.js`，ESModule 语法，适配 `type: module`，所有转译均以此为基础。
- Webpack 配置采用 `webpack.config.js`，支持 vue-loader、babel-loader，适配 type: module。
- Webpack 入口文件为 `src/index.js`，Vite 入口文件为 `src/main.js`，两者互不干扰，便于对比学习。
- Polyfill 推荐用 core-js + useBuiltIns: 'usage'，按需引入，兼容性最佳。
- 所有实操均有详细注释和 markdown 教学文档，便于自学和查阅。
- 框架集成（React/TS/Vue）均有独立示例文件、依赖、配置、转译命令。
- 插件开发（简单/进阶/AI 场景）均有源码、测试、转译产物，便于 AST 学习。
- 性能调优、调试技巧、常见问题排查均有专章总结。


---

## 参考资料与工具推荐

- [Babel 官方文档](https://babeljs.io/docs/en/)
- [Babel GitHub](https://github.com/babel/babel)
- [Webpack 官方文档](https://webpack.js.org/)
- [Vite 官方文档](https://vitejs.dev/)
- [AST Explorer](https://astexplorer.net/)：AST 可视化与插件调试利器
- [babel-plugin-tester](https://github.com/babel-utils/babel-plugin-tester)：插件单元测试工具

---


---

欢迎大家一起学习、实践和交流 Babel 相关经验！如有建议、疑问或想补充案例，欢迎 issue 或 PR。
