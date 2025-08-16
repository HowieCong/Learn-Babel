// 08_babel_plugin_easy_demo.js
// 本文件演示如何编写并使用一个简单的 Babel插件

// 步骤 1：新建插件文件（如 src/my-babel-plugin.js）
// 例：将所有变量名 foo 替换为 bar

// src/my-babel-plugin.js
export default function myBabelPlugin() {
  return {
    visitor: {
      Identifier(path) {
        if (path.node.name === "foo") {
          path.node.name = "bar";
        }
      }
    }
  };
}

// 步骤 2：编写测试代码（如 src/plugin_test.js）
const foo = 1;
console.log(foo);

// 步骤 3：配置 babel.config.js，添加插件
// import myBabelPlugin from "./src/my-babel-plugin.js";
// export default {
//   presets: ["@babel/preset-env"],
//   plugins: [myBabelPlugin]
// }

// 步骤 4：转译测试代码
// 在终端运行：
//   npx babel src/plugin_test.js -o src/plugin_test.transpiled.js

// 步骤 5：查看 src/plugin_test.transpiled.js，变量 foo 会被替换为 bar

// 你可以尝试修改插件逻辑，体验 Babel AST 转换的乐趣！