# Learn-Babel（中文说明）

Language : [🇺🇸 English](./README.md) | [🇨🇳 中文]

---

本项目是一个系统化的 Babel 学习与实战仓库，适合零基础到进阶开发者。内容涵盖 Babel 基础原理、配置、常用插件、polyfill、与 Webpack/Vite 集成、实战案例等。

## 项目结构

- `01_babel_intro.js`：Babel 是什么？理论与简单例子。
- `02_babel_install_and_run.js`：Babel 安装与转译实操。
- `03_babel_config_explain.md`：Babel 配置文件详解。
- `04_babel_preset_plugin_demo.js`：preset-env 和常用插件实操。
- `05_babel_polyfill_demo.js`：Babel Polyfill 使用场景与配置。
- `06_babel_with_webpack_demo.md`：Babel 与 Webpack 集成实操。
- `07_babel_with_vite_demo.md`：Babel 与 Vite 集成实操。
- `babel.config.js`：全局 Babel 配置（ESModule 语法，适配 type: module）。
- `webpack.config.js`：Webpack 配置（ESModule 语法，适配 type: module）。
- `src/`：源码目录，包含 Webpack/Vite 各自入口文件（index.js/main.js）。
- `dist/`：Webpack 打包输出目录。
- `index.html`：Vite 项目入口页面。
- 其他：各阶段转译产物、实验文件、依赖配置等。

## 快速开始

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

## 学习路线与内容

1. Babel 基础原理与作用（见 01_babel_intro.js）
2. Babel 安装与基本用法（见 02_babel_install_and_run.js）
3. Babel 配置文件详解（见 03_babel_config_explain.md）
4. preset-env 与常用插件实操（见 04_babel_preset_plugin_demo.js）
5. Polyfill 场景与配置（见 05_babel_polyfill_demo.js）
6. Babel 与 Webpack 集成（见 06_babel_with_webpack_demo.md，入口 src/index.js）
7. Babel 与 Vite 集成（见 07_babel_with_vite_demo.md，入口 src/main.js）
8. 更多实战与进阶内容可持续补充

## 配置与实践说明

- Babel 配置统一采用 `babel.config.js`，ESModule 语法，适配 `type: module`。
- Webpack 配置采用 `webpack.config.js`，ESModule 语法。
- Webpack 入口文件为 `src/index.js`，Vite 入口文件为 `src/main.js`，两者互不干扰。
- Polyfill 推荐用 core-js + useBuiltIns: 'usage'，按需引入。
- 所有实操均有详细注释和 markdown 教学文档，便于自学和查阅。

## 参考资料

- [Babel 官方文档](https://babeljs.io/docs/en/)
- [Babel GitHub](https://github.com/babel/babel)
- [Webpack 官方文档](https://webpack.js.org/)
- [Vite 官方文档](https://vitejs.dev/)

---

欢迎大家一起学习、实践和交流 Babel 相关经验！如有建议或疑问，欢迎 issue。
