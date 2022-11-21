class Functions {
  static createRandomId = function () {
    return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
  };

  static setLocalStorage(key, value) {
    return localStorage.setItem(key, JSON.stringify(value))
  };

  static getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key))
  };
}

export default Functions;
