# 11_babel_performance_debug_tips.md

# Babel 性能优化与调试技巧（实操）

本文件总结了 Babel 在实际项目中的性能优化方法与调试技巧，帮助你高效开发和定位问题。

---

## 一、性能优化技巧

### 1. 精准配置 presets 和 plugins

- 只引入实际需要的 preset/plugin，避免全量 preset。
- 推荐用 `@babel/preset-env` 并配置 `targets`，减少不必要的转译。

```javascript
// babel.config.js
export default {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: { chrome: "114", node: "18" }, // 只转译目标环境不支持的语法
        useBuiltIns: "usage",
        corejs: 3,
      },
    ],
  ],
};
```

### 2. 使用 include/exclude 限定转译范围

- 只转译你的源码，跳过 node_modules 等第三方库。

```javascript
// webpack.config.js 示例
{
  test: /\.js$/,
  include: /src/,      // 只转译 src 目录
  exclude: /node_modules/,
  use: "babel-loader"
}
```

### 3. 开启缓存

- 使用 `cacheDirectory` 提升二次构建速度。

```javascript
// webpack.config.js
{
  loader: "babel-loader",
  options: {
    cacheDirectory: true
  }
}
```

### 4. 避免多次重复转译

- 保证只在一处（如 Webpack/Vite）集成 Babel，避免链式工具重复处理。

### 5. 升级 Babel 及相关依赖

- Babel 7+ 性能提升明显，建议保持最新版。

---

## 二、调试技巧

### 1. 输出转译结果

- 用 Babel CLI 查看转译后代码，便于定位语法兼容和插件效果。

```sh
npx babel src/example.js --out-file src/example.transpiled.js
```

### 2. 使用 `babel.config.js` 的 `overrides` 精细调试

- 针对不同文件/目录配置不同插件，便于定位问题。

```javascript
export default {
  overrides: [
    {
      test: "./src/special.js",
      plugins: ["your-plugin"],
    },
  ],
};
```

### 3. 插件开发调试

- 在插件中用 `console.log(path.node)` 输出 AST 节点，观察结构。
- 推荐用 [AST Explorer](https://astexplorer.net/) 可视化调试。

### 4. 开启 Babel debug 日志

- 配置 `@babel/preset-env` 的 `debug: true`，输出详细转译信息。

```javascript
presets: [
  [
    "@babel/preset-env",
    {
      debug: true,
    },
  ],
];
```

### 5. 常见问题排查

- 检查配置文件路径、语法（ESM/CJS）是否与项目一致。
- 遇到转译无效，优先排查 include/exclude、targets 配置。
- 多工具链协作时，确认 Babel 只被调用一次。

---

## 三、实用工具推荐

- [AST Explorer](https://astexplorer.net/)：AST 可视化与插件调试利器。
- [babel-plugin-tester](https://github.com/babel-utils/babel-plugin-tester)：插件单元测试工具。
- [Babel 官方文档](https://babeljs.io/docs/en/)：查找 preset、plugin 配置细节。

---

如需进一步实操演示、遇到具体性能或调试问题，欢迎随时
