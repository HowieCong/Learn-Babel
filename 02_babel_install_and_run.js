// 02_babel_install_and_run.js
// 本文件演示如何安装 Babel 并转译一个简单的 ES6 文件

// 步骤 1：初始化项目（只需执行一次）
// 在终端运行：
//   pnpm init -y

// 步骤 2：安装 Babel 相关依赖
// 在终端运行：
//    pnpm install --save-dev @babel/core @babel/cli @babel/preset-env

// 步骤 3：创建 Babel 配置文件
// 在项目根目录新建 .babelrc 文件，内容如下：
// {
//   "presets": ["@babel/preset-env"]
// }

// 步骤 4：编写 ES6 示例代码（本文件内容）
const greet = name => `Hello, ${name}!`;
console.log(greet('Babel'));

// 步骤 5：用 Babel 转译本文件
// 在终端运行：
//    npx babel 02_babel_install_and_run.js -o 02_babel_install_and_run.transpiled.js

// 步骤 6：运行转译后的文件
// 在终端运行：
//    node 02_babel_install_and_run.transpiled.js
