# Babel AST 基础与实操

本文件帮助你快速入门 Babel 的 AST（抽象语法树）原理、常见节点类型、path 操作，并通过 AST Explorer 进行可视化学习和实操。

---

## 一、什么是 AST？

- **AST（抽象语法树）** 是代码的结构化表示，Babel 通过 AST 实现代码的分析、转换和生成。
- 每个节点代表代码中的一个语法元素（如变量、函数、表达式等）。

---

## 二、常见 AST 节点类型

- **Program**：整个文件的根节点
- **VariableDeclaration**：变量声明（如 `let a = 1`）
- **FunctionDeclaration**：函数声明
- **Identifier**：标识符（变量名、函数名等）
- **Literal**（或 StringLiteral、NumericLiteral）：字面量（如字符串、数字）
- **ExpressionStatement**：表达式语句（如 `console.log(a)`）

---

## 三、AST Explorer 可视化学习

1. 打开 [AST Explorer](https://astexplorer.net/)
2. 选择 `@babel/parser` 作为解析器
3. 在左侧输入如下 JS 代码：

   ```javascript
   function greet(name) {
     return "Hello, " + name;
   }
   let x = 42;
   ```

4. 右侧会自动显示对应的 AST 结构树。你可以点击节点查看详细属性。

---

## 四、Babel 插件中的 path 操作

- Babel 插件通过 `path` 对 AST 节点进行遍历和修改。
- 例如，遍历所有函数声明并打印函数名：

  ```javascript
  export default function myPlugin() {
    return {
      visitor: {
        FunctionDeclaration(path) {
          console.log("函数名：", path.node.id.name);
        },
      },
    };
  }
  ```

- `path.node` 代表当前 AST 节点，`path.parent` 代表父节点，`path.get('body')` 可获取子节点。

---

## 五、实操：手动分析一个 JS 片段的 AST

### 示例代码

```javascript
const foo = (x) => x * 2;
```

### 在 AST Explorer 中观察

- **VariableDeclaration**：变量声明（const foo = ...）
- **VariableDeclarator**：变量定义（foo = ...）
- **Identifier**：变量名 foo
- **ArrowFunctionExpression**：箭头函数
- **Identifier**：参数 x
- **BinaryExpression**：x \* 2

你可以尝试修改代码，观察 AST 结构的变化。

---

## 六、进阶建议

- 多用 AST Explorer 练习不同语法的 AST 结构。
- 阅读 Babel 插件源码，理解常见节点类型和 path 操作。
- 尝试编写简单的 Babel 插件，实践 AST 遍历与修改。

---

如需进一步学习 AST 操作或 Babel 插件开发，欢迎随时提问
