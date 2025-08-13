// Syntax
// 语法
const a = (params = 1) => 1 + params;

// Array destructuring and spread
// 数组解构和扩展
const b = [1, 2];
const c = [...b, 3, 4, 5];

// Class definition
// 类定义
class DaWei {
}

// Instantiate class
// 实例化类
new DaWei();

// API usage: filter even numbers
// API 使用：过滤偶数
const x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter((x) => x % 2 === 0);

// API usage: object assign
// API 使用：对象合并
const y = Object.assign({}, { name: 1 });