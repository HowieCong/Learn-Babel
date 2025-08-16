// Export the Babel plugin as the default export
// 将 Babel 插件作为默认导出
export default function myAdvancedBabelPlugin() {
  return {
    visitor: {
      // Visitor for FunctionDeclaration nodes
      // 访问 FunctionDeclaration 节点
      FunctionDeclaration(path) {
        // Get the function name
        // 获取函数名
        const funcName = path.node.id && path.node.id.name;
        if (funcName) {
          // 构造 console.log(`${funcName} called`);
          const logNode = {
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
          };
          // Insert a log statement at the start of the function body
          // 在函数体开头插入日志语句
          path.get('body').unshiftContainer('body', logNode);
        }
      },
    },
  };
}
