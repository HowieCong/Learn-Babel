# Learn-Babel（中文说明）

Language : [🇺🇸 English](./README.md) | [🇨🇳 中文]

---

本项目用于学习和实践 Babel 的相关知识，并分享学习 Babel 的经验和示例代码。

## 项目简介

Babel 是一个广泛使用的 JavaScript 编译器，可以将 ES6+ 代码转换为向后兼容的 JavaScript 语法，以便在当前和旧版本的浏览器或环境中运行。本仓库包含 Babel 的基础用法、配置方法、常见插件、转码示例等内容，适合初学者和进阶开发者参考。

## 目录结构

- `index.js`：主入口文件，包含 Babel 转码相关代码示例。
- `test.js`：用于测试 Babel 配置和功能的脚本。
- `package.json`：项目依赖和脚本配置。
- `pnpm-lock.yaml`：依赖锁定文件。

## 如何使用

1. 克隆本仓库：
   ```bash
   git clone https://github.com/HowieCong/Learn-Babel.git
   cd Learn-Babel
   ```
2. 安装依赖：
   ```bash
   pnpm install
   # 或者使用 npm install
   ```
3. 运行示例或测试：
   ```bash
   node index.js
   node test.js
   ```

## Babel 学习内容

- Babel 的基本原理和作用
- Babel 配置文件（如 .babelrc、babel.config.js）
- 常用 Babel 插件和预设（presets）
- 如何将 ES6+ 代码转译为兼容代码
- 实践案例与常见问题

## 经验分享

- 建议先了解 ES6+ 新特性，再学习 Babel 的转译原理
- 推荐结合实际项目配置 Babel，理解各插件和 preset 的作用
- 遇到兼容性问题时，优先查阅 Babel 官方文档和社区经验

## 参考资料

- [Babel 官方文档](https://babeljs.io/docs/en/)
- [Babel GitHub](https://github.com/babel/babel)

---

欢迎大家一起学习和交流 Babel 相关经验！
