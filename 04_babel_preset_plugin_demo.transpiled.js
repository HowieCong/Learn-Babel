"use strict";

// 04_babel_preset_plugin_demo.js
// 本文件演示如何使用 preset-env 和常用 Babel 插件进行转译

// 步骤 1：安装 Babel 及常用插件
// 在终端运行：
//   npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/plugin-transform-arrow-functions @babel/plugin-transform-template-literals

// 步骤 2：配置 babel.config.js 文件（使用 ES Module 语法），内容如下：
// export default {
//   presets: ["@babel/preset-env"],
//   plugins: [
//     "@babel/plugin-transform-arrow-functions",
//     "@babel/plugin-transform-template-literals"
//   ]
// }

// 步骤 3：编写包含箭头函数和模板字符串的 ES6+ 代码（如下）
var sayHello = function sayHello(name) {
  return "Hello, ".concat(name, "!");
};
console.log(sayHello('Babel'));

// 步骤 4：用 Babel 转译本文件
// 在终端运行：
//   npx babel 04_babel_preset_plugin_demo.js -o 04_babel_preset_plugin_demo.transpiled.js

// 步骤 5：运行转译后的文件
// 在终端运行：
//   node 04_babel_preset_plugin_demo.transpiled.js

// 你可以对比转译前后的代码，观察箭头函数和模板字符串被转换成了什么样子。
