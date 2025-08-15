"use strict";

// 05_babel_polyfill_demo.js
// This file demonstrates the usage scenarios and configuration methods of Babel Polyfill
// 本文件演示 Babel Polyfill 的使用场景和配置方法

// 1. What is a Polyfill?
// 1. 什么是 Polyfill？
// Polyfill is used to supplement new JS features (such as Promise, Array.from, Object.assign, etc.) for old environments, allowing new syntax/new APIs to run in old browsers or low-version Node.
// Polyfill 用于为旧环境补充新 JS 特性（如 Promise、Array.from、Object.assign 等），让新语法/新 API 能在老浏览器或 Node 低版本中运行。

// 2. Common scenarios
// 2. 常见场景
// - Your code uses new APIs such as Promise, Set, Map, Array.prototype.includes, etc.
// - 你的代码用到了 Promise、Set、Map、Array.prototype.includes 等新 API
// - The target environment (such as IE11, old Node.js) does not natively support these APIs
// - 目标环境（如 IE11、老版 Node.js）原生不支持这些 API

// 3. Install polyfill dependencies
// 3. 安装 polyfill 依赖
// It is recommended to use core-js and regenerator-runtime
// 推荐用 core-js 和 regenerator-runtime
// Run in terminal:
// 在终端运行：
//   pnpm install core-js regenerator-runtime

// 4. Configure Babel (babel.config.js)
// 4. 配置 Babel（babel.config.js）
// export default {
//   presets: [
//     ['@babel/preset-env', {
//       useBuiltIns: 'usage', // Import polyfill as needed // 按需引入 polyfill
//       corejs: 3             // Specify core-js version // 指定 core-js 版本
//     }]
//   ]
// }

// 5. Code example: using new APIs
// 5. 代码示例：用到新 API
var arr = [1, 2, 3];
console.log(arr.includes(2)); // true

var p = Promise.resolve('polyfill test');
p.then(console.log);

// 6. Transpile and run
// 6. 转译并运行
// Run in terminal:
// 在终端运行：
//   npx babel 05_babel_polyfill_demo.js -o 05_babel_polyfill_demo.transpiled.js
//   node 05_babel_polyfill_demo.transpiled.js

// 7. Notes
// 7. 说明
// - Babel only transpiles syntax, not APIs; polyfill is responsible for supplementing APIs
// - Babel 只转语法，不补 API，polyfill 负责补 API
// - It is recommended to always use core-js + useBuiltIns: 'usage', so that Babel automatically imports polyfill as needed
// - 推荐 always 用 core-js + useBuiltIns: 'usage'，让 Babel 自动按需引入 polyfill
