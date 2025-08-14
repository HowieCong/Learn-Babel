# Babel Configuration File Explanation (.babelrc and babel.config.js)

# Babel 配置文件说明（.babelrc 和 babel.config.js）

This document explains the purpose and common fields of Babel configuration files (`.babelrc` and `babel.config.js`).

本文件讲解 Babel 配置文件（`.babelrc` 和 `babel.config.js`）的作用和常用字段。

---

## 1. What is .babelrc?

## 1. 什么是 .babelrc？

`.babelrc` is Babel's configuration file, usually placed in the project root directory. It tells Babel how to transpile code.

`.babelrc` 是 Babel 的配置文件，通常放在项目根目录，告诉 Babel 如何转译代码。

---

## 2. What is babel.config.js?

## 2. 什么是 babel.config.js？

`babel.config.js` is also a configuration file. It supports JavaScript logic and is suitable for monorepos or complex projects.

`babel.config.js` 也是配置文件，支持写 JS 逻辑，适合多包/复杂项目。

---

## 3. Common Fields Explanation

## 3. 常用字段说明

### 3.1 `presets`

Presets, determine which new syntax to transpile.  
Common: `@babel/preset-env` (for ES6+), `@babel/preset-react` (for JSX).

预设，决定转哪些新语法。  
常用：`@babel/preset-env`（转 ES6+）、`@babel/preset-react`（转 JSX）。

### 3.2 `plugins`

Plugins, for more detailed syntax transformations or feature enhancements.  
Example: `@babel/plugin-transform-arrow-functions` (transforms arrow functions).

插件，做更细致的语法转换或功能增强。  
如：`@babel/plugin-transform-arrow-functions`（转箭头函数）。

### 3.3 `ignore`

Ignore files or directories that do not need to be transpiled.  
Example: `"ignore": ["node_modules"]`

忽略不需要转译的文件或目录。  
例：`"ignore": ["node_modules"]`

### 3.4 `only`

Only transpile specified files or directories.  
Example: `"only": ["src/"]`

只转译指定的文件或目录。  
例：`"only": ["src/"]`

---

## 4. Practical Suggestions

## 4. 实操建议

You can modify `.babelrc` or create a new `babel.config.js` to experience the effects of different configurations.

你可以修改 `.babelrc` 或新建 `babel.config.js`，体验不同配置的效果。

---

## 5. Examples

## 5. 示例

**.babelrc file content:**

**.babelrc 文件内容：**

```json
{
  "presets": ["@babel/preset-env"], // Presets: transpile ES6+ syntax // 预设：转译 ES6+ 语法
  "plugins": ["@babel/plugin-transform-arrow-functions"], // Plugins: transform arrow functions // 插件：转箭头函数
  "ignore": ["node_modules"], // Ignore node_modules // 忽略 node_modules
  "only": ["./"] // Only transpile current directory // 只转译当前目录
}
```

**babel.config.js file content:**

**babel.config.js 文件内容：**

```js
module.exports = {
  presets: ["@babel/preset-env"], // Presets: transpile ES6+ syntax // 预设：转译 ES6+ 语法
  plugins: ["@babel/plugin-transform-arrow-functions"], // Plugins: transform arrow functions // 插件：转箭头函数
  ignore: ["node_modules"], // Ignore node_modules // 忽略 node_modules
  only: ["./"], // Only transpile current directory // 只转译当前目录
  // You can write JS logic here, such as dynamic config based on environment variables
  // 你可以在这里写 JS 逻辑，比如根据环境变量动态配置
  // env: {
  //   test: { plugins: ['plugin-for-test'] }
  // }
};
```

---

## 6. Recommendations

## 6. 建议

- For small projects, it is recommended to use `.babelrc`
- 小项目建议使用 `.babelrc`
- For large or monorepo projects, it is recommended to use `babel.config.js`
- 大型/多包项目建议使用 `babel.config.js`

---

## 7. Practice

## 7. 练习

- Try adding the `plugins` field in `.babelrc`
- 尝试在 `.babelrc` 添加 `plugins` 字段
- Or create a new `babel.config.js` file
- 或新建 `babel.config.js` 文件

---

## 8. ExperienceDifference between `.babelrc` and `babel.config.js`

## 8. `.babelrc` 和 `babel.config.js` 的区别

| Config File       | Scope                       | Format     | Use Case                |
| ----------------- | --------------------------- | ---------- | ----------------------- |
| `.babelrc`        | Current directory & subdirs | JSON       | Single/simple projects  |
| `babel.config.js` | Whole project (global)      | JavaScript | Monorepo/complex setups |

| 配置文件          | 作用范围         | 格式       | 适用场景          |
| ----------------- | ---------------- | ---------- | ----------------- |
| `.babelrc`        | 当前目录及子目录 | JSON       | 单一/简单项目     |
| `babel.config.js` | 整个项目（全局） | JavaScript | 多包仓库/复杂项目 |

- **`.babelrc`**: Simple JSON, applies to the current directory and its subdirectories. Best for small or single-package projects.

- **`.babelrc`**：简单的 JSON 格式，只作用于当前目录及其子目录，适合小型或单包项目。

- **`babel.config.js`**: JavaScript file, can contain logic, applies globally. Recommended for monorepos or when you need dynamic configuration.

- **`babel.config.js`**：JavaScript 文件，可写逻辑，作用于整个项目，适合多包仓库或需要动态配置的场景。
