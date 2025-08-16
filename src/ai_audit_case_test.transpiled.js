"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * @ai
 * @param {Number} x
 * @param {String} y
 */
function aiSum(x, y) {
  if (typeof x !== "number") throw new TypeError("\u53C2\u6570 x \u5FC5\u987B\u4E3A Number");
  if (typeof y !== "string") throw new TypeError("\u53C2\u6570 y \u5FC5\u987B\u4E3A String");
  console.log("AI audit: aiSum \u88AB\u8C03\u7528\uFF0C\u53C2\u6570:", arguments);
  return "".concat(x, " + ").concat(y);
}

/**
 * @ai
 */
var aiPredict = function aiPredict(input) {
  return input > 0.5 ? "Positive" : "Negative";
};
var AIModel = /*#__PURE__*/function () {
  function AIModel() {
    _classCallCheck(this, AIModel);
  }
  return _createClass(AIModel, [{
    key: "run",
    value:
    /**
     * @ai
     * @param {String} prompt
     */
    function run(prompt) {
      return "AI running: ".concat(prompt);
    }
  }]);
}();
console.log(aiSum(1, "test"));
console.log(aiPredict(0.8));
console.log(new AIModel().run("hello"));
