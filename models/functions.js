class Functions {
  static createRandomId = function () {
    return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
  };
}

module.exports = Functions;
