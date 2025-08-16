// 09_babel_plugin_advanced_demo.js
// 本文件演示如何编写并使用一个稍复杂的 Babel 插件

// 步骤 1：新建插件文件（如 src/my-advanced-babel-plugin.js）
// 例：自动为所有函数添加日志输出（console.log('函数名 called')）

// src/my-advanced-babel-plugin.js
export default function myAdvancedBabelPlugin() {
  return {
    visitor: {
      FunctionDeclaration(path) {
        const funcName = path.node.id && path.node.id.name;
        if (funcName) {
          const logStatement = path.hub.file.addHelper
            ? path.hub.file.addHelper('log')
            : null;
          const log = path.scope.buildUndefinedNode
            ? path.scope.buildUndefinedNode()
            : null;
          path.get('body').unshiftContainer(
            'body',
            path.hub.file.addHelper
              ? logStatement
              : {
                  type: 'ExpressionStatement',
                  expression: {
                    type: 'CallExpression',
                    callee: {
                      type: 'MemberExpression',
                      object: { type: 'Identifier', name: 'console' },
                      property: { type: 'Identifier', name: 'log' },
                    },
                    arguments: [
                      {
                        type: 'StringLiteral',
                        value: `${funcName} called`,
                      },
                    ],
                  },
                }
          );
        }
      },
    },
  };
}

// 步骤 2：编写测试代码（如 src/advanced_plugin_test.js）
function hello(name) {
  return `Hello, ${name}`;
}
hello('Babel');

// 步骤 3：配置 babel.config.js，添加插件
// import myAdvancedBabelPlugin from "./src/my-advanced-babel-plugin.js";
// export default {
//   presets: ["@babel/preset-env"],
//   plugins: [myAdvancedBabelPlugin]
// }

// 步骤 4：转译测试代码
// 在终端运行：
//   npx babel src/advanced_plugin_test.js -o src/advanced_plugin_test.transpiled.js

// 步骤 5：查看 src/advanced_plugin_test.transpiled.js，所有函数体开头会自动插入 console.log('函数名 called')

// 你可以尝试扩展插件功能，比如为箭头函数、类方法等也自动加日志，体验 Babel AST 的强大！