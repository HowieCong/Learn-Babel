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
