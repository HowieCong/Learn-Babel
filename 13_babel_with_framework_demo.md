# Babel 与主流框架结合实战

本文件演示 Babel 在 React（JSX）、TypeScript、Vue 等主流前端框架中的常见用法与配置。

---

## 一、Babel + React（JSX 转换）

### 1. 安装依赖

```sh
pnpm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/preset-react
```

### 2. 配置 babel.config.js

```javascript
// babel.config.js
export default {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react"
  ]
};
```

### 3. 示例代码

```jsx
// src/hello.jsx
const App = () => <h1>Hello, Babel + React!</h1>;
export default App;
```

### 4. 转译命令

```sh
npx babel src/hello.jsx -o src/hello.transpiled.js
```

---

## 二、Babel + TypeScript

### 1. 安装依赖

```sh
npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/preset-typescript
```

### 2. 配置 babel.config.js

```javascript
// babel.config.js
export default {
  presets: [
    "@babel/preset-env",
    "@babel/preset-typescript"
  ]
};
```

### 3. 示例代码

```typescript
// src/ts_demo.ts
const msg: string = "Hello, TypeScript!";
console.log(msg);
```

### 4. 转译命令

```sh
npx babel src/ts_demo.ts -o src/ts_demo.transpiled.js
```

---

## 三、Babel + Vue（配合 vue-loader）

> Vue 单文件组件（.vue）通常由 `vue-loader` 处理，内部集成 Babel。你只需配置 Babel 预设即可。

### 1. 安装依赖

```sh
npm install --save-dev @babel/core @babel/preset-env vue-loader vue-template-compiler
```

### 2. 配置 babel.config.js

```javascript
// babel.config.js
export default {
  presets: [
    "@babel/preset-env"
  ]
};
```

### 3. webpack 配置片段

```javascript
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  }
};
```

### 4. 示例 Vue 组件

```vue
<!-- src/Hello.vue -->
<template>
  <div>Hello, Babel + Vue!</div>
</template>
<script>
export default {
  name: "Hello"
};
</script>
```

---

## 总结

- React 项目需加 `@babel/preset-react`
- TypeScript 项目需加 `@babel/preset-typescript`
- Vue 项目通常配合 `vue-loader`，Babel 只需配置 JS 相关 preset

如需更深入的框架集成与优化实践，可继续补充相关