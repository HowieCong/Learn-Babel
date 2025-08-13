// Import Babel core functions
// 导入 Babel 核心功能
import * as babel from "@babel/core";

// Import Babel preset-env for ES6+ to ES5 transpilation
// 导入 Babel 的 preset-env，用于将 ES6+ 转换为 ES5
import presetEnv from "@babel/preset-env";

// Import Node.js file system module
// 导入 Node.js 的文件系统模块
import fs from "node:fs";

// Read the contents of 02_test.js as a UTF-8 string
// 以 UTF-8 字符串读取 02_test.js 文件内容
const code = fs.readFileSync("./02_test.js", "utf-8");

// Transform the code using Babel with preset-env
// 使用 Babel 和 preset-env 转换代码
const res = babel.transformSync(code, {
  presets: [presetEnv], // Use preset-env for compatibility
  // 使用 preset-env 以保证兼容性
  plugins: [], // No additional plugins
  // 不使用额外插件
});

// Output the transformed code to the console
// 将转换后的代码输出到控制台
console.log(res.code);