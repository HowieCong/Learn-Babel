# 06_babel_with_webpack_demo.md

# Babel 与 Webpack 集成（实操，pnpm & ESModule 版）

本文件演示如何在 Webpack 项目中集成 Babel，适用于 pnpm 包管理器和 ESModule 语法的 babel.config.js（即 `export default`）。

---

## 1. 安装依赖

```sh
pnpm add -D webpack webpack-cli babel-loader @babel/core @babel/preset-env
```

## 2. 配置 Babel（babel.config.js，ESModule 语法）

```javascript
// babel.config.js
export default {
  presets: ["@babel/preset-env"],
};
```

> 注意：如果你用 `export default`，需要保证你的 `package.json` 里有 `"type": "module"` 字段。

## 3. 配置 Webpack（webpack.config.js）

```javascript
// webpack.config.js (ESModule 语法)
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
```

## 4. 示例代码（src/index.js）

```javascript
const greet = (name) => `Hello, ${name}!`;
console.log(greet("Webpack+Babel"));
```

## 5. 打包并运行

```sh
pnpm exec webpack
node dist/bundle.js
```

---

如需更详细的项目结构或遇到报错，随时提问！
