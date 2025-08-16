function parseParamTypes(comment) {
  // 简单解析 @param {类型} 参数名
  const paramTypes = {};
  const paramRegex = /@param\s+{(\w+)}\s+(\w+)/g;
  let match;
  while ((match = paramRegex.exec(comment))) {
    paramTypes[match[2]] = match[1];
  }
  return paramTypes;
}

export default function aiAdvancedAuditPlugin() {
  return {
    visitor: {
      // 普通函数
      FunctionDeclaration(path) {
        handleFunction(path, path.node.id && path.node.id.name);
      },
      // 箭头函数
      VariableDeclarator(path) {
        if (
          path.node.init &&
          path.node.init.type === "ArrowFunctionExpression"
        ) {
          handleFunction(path.get("init"), path.node.id.name, path.node.leadingComments);
        }
      },
      // 类方法
      ClassMethod(path) {
        handleFunction(path, path.node.key && path.node.key.name);
      },
    },
  };

  function handleFunction(path, funcName, extraComments) {
    const leadingComments = (path.node.leadingComments || extraComments || []);
    const commentStr = leadingComments.map((c) => c.value).join("\n");
    if (commentStr.includes("@ai")) {
      // 1. 插入 AI 审计日志
      const logNode = {
        type: "ExpressionStatement",
        expression: {
          type: "CallExpression",
          callee: {
            type: "MemberExpression",
            object: { type: "Identifier", name: "console" },
            property: { type: "Identifier", name: "log" },
          },
          arguments: [
            {
              type: "StringLiteral",
              value: `AI audit: ${funcName} 被调用，参数:`,
            },
            { type: "Identifier", name: "arguments" },
          ],
        },
      };

      // 2. 解析参数类型并插入类型校验
      const paramTypes = parseParamTypes(commentStr);
      const checks = [];
      path.node.params.forEach((param) => {
        if (param.type === "Identifier" && paramTypes[param.name]) {
          const type = paramTypes[param.name];
          checks.push({
            type: "IfStatement",
            test: {
              type: "BinaryExpression",
              operator: "!==",
              left: {
                type: "UnaryExpression",
                operator: "typeof",
                argument: { type: "Identifier", name: param.name },
                prefix: true,
              },
              right: { type: "StringLiteral", value: type.toLowerCase() },
            },
            consequent: {
              type: "ThrowStatement",
              argument: {
                type: "NewExpression",
                callee: { type: "Identifier", name: "TypeError" },
                arguments: [
                  {
                    type: "StringLiteral",
                    value: `参数 ${param.name} 必须为 ${type}`,
                  },
                ],
              },
            },
          });
        }
      });

      // 3. 插入到函数体开头
      const bodyPath = path.get("body");
      bodyPath.unshiftContainer("body", logNode);
      checks.reverse().forEach((check) => bodyPath.unshiftContainer("body", check));
    }
  }
}
