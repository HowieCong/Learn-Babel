# 07_babel_with_vite_demo.md

# Babel 与 Vite 集成（实操，pnpm & ESModule 版）

本文件演示如何在 Vite 项目中集成 Babel，适用于 pnpm 包管理器和 ESModule 语法的 babel.config.js。

> **说明：本示例入口文件为 `src/main.js`，仅用于 Vite 启动测试。请勿与 Webpack 共用入口文件。**

---

## 1. 安装依赖

```sh
pnpm add -D vite @babel/core @babel/preset-env
```

---

## 2. 配置 Babel（babel.config.js，ESModule 语法）

确保项目根目录下有如下 `babel.config.js` 文件：

```javascript
// babel.config.js
export default {
  presets: ["@babel/preset-env"],
};
```

> 注意：你的 `package.json` 里需有 `"type": "module"` 字段。

---

## 3. 新建入口文件和页面

- `main.js`（src/main.js）：

  ```javascript
  const greet = (name) => `Hello, ${name}!`;
  document.body.innerHTML = `<h1>${greet("Vite+Babel")}</h1>`;
  ```

- `index.html`（src/index.html）：

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>Vite + Babel Demo</title>
    </head>
    <body>
      <script type="module" src="/src/main.js"></script>
    </body>
  </html>
  ```

---

## 4. 启动 Vite

```sh
pnpm exec vite
```

默认会在 http://localhost:5173 打开开发服务器，页面会显示 `Hello, Vite+Babel!`。

---

## 说明

- Vite 默认支持现代 JS 语法，babel.config.js 主要用于特殊兼容需求或配合插件。
- 如需 React/Vue 等框架支持，可安装对应的 Vite 插件（如 @vitejs/plugin-react）。
- 你可以在 `main.js` 中尝试更多 ES6+ 语法，Babel 会根据配置自动转译。

---

如需更详细的项目结构或遇到报错，随时提问
