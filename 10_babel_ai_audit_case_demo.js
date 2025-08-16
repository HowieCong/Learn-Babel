// 10_babel_ai_audit_case_demo.js
// 本文件演示 Babel 在 AI 项目中的创新复杂应用：自动为所有带 @ai 注释的函数（包括普通函数、箭头函数、类方法）注入 AI 审计日志和参数校验代码（ESM 语法）
// 你将学到：AST 操作、注释解析、不同函数类型处理、自动插桩、参数类型校验等

// 步骤 1：新建插件文件 src/ai-advanced-audit-plugin.js
// 插件目标：
// 1. 找到所有带 @ai 注释的函数（支持 FunctionDeclaration、ArrowFunctionExpression、ClassMethod）
// 2. 在函数体开头插入 console.log('AI audit: 函数名/方法名 被调用，参数:', arguments)
// 3. 如果注释中有 @param 类型声明，自动插入参数类型校验代码
// 4. 支持自定义日志内容

// src/ai-advanced-audit-plugin.js
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

// 步骤 2：编写测试代码 src/ai_audit_case_test.js
/**
 * @ai
 * @param {Number} x
 * @param {String} y
 */
function aiSum(x, y) {
  return `${x} + ${y}`;
}

/**
 * @ai
 */
const aiPredict = (input) => {
  return input > 0.5 ? "Positive" : "Negative";
};

class AIModel {
  /**
   * @ai
   * @param {String} prompt
   */
  run(prompt) {
    return `AI running: ${prompt}`;
  }
}

console.log(aiSum(1, "test"));
console.log(aiPredict(0.8));
console.log(new AIModel().run("hello"));

// 步骤 3：配置 babel.config.js，添加插件（ESM 语法）
// import aiAdvancedAuditPlugin from "./src/ai-advanced-audit-plugin.js";
// export default {
//   presets: ["@babel/preset-env"],
//   plugins: [aiAdvancedAuditPlugin]
// }

// 步骤 4：转译测试代码
// 在终端运行：
//   npx babel src/ai_audit_case_test.js -o src/ai_audit_case_test.transpiled.js

// 步骤 5：运行转译后的代码
// node src/ai_audit_case_test.transpiled.js
// 你会看到：
// - 所有带 @ai 注释的函数/方法自动插入了日志
// - 有 @param 注释的参数自动插入了类型校验
// - 支持普通函数、箭头函数、类方法

// 创新点与扩展思路：
// - 可扩展支持 async 函数、生成器、类静态方法等
// - 可根据注释自定义日志内容、日志级别
// - 可自动收集 AI 调用数据用于后续分析
// - 可结合 AST 分析自动生成 API 文档或测试用例

// 你可以尝试修改注释、参数类型、函数类型，体验 Babel 插件在 AI 项目中的强大与灵活！