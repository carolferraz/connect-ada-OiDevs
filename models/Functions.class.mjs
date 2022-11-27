class Functions {
  static createRandomId = function () {
    return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
  };

  static setLocalStorage(key, value) {
    return localStorage.setItem(key, JSON.stringify(value));
  }

  static getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  constructor() {
    this.inputs = document.querySelectorAll(".required");
    this.inputErrorMsgs = document.querySelectorAll(".invalid-msg");
    this.emailRegexValidate = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  }

  resetInputs() {
    for (let index = 0; index < this.inputs.length; index++) {
      this.inputs[index].style.border = '1px solid #8D8D99';
      this.inputs[index].value = '';
    }
  }

  errorInvalidInput(index) {
    this.inputs[index].style.border = "1px solid #F75A68";
    this.inputErrorMsgs[index].style.display = "block";
  }

  acceptedInput(index) {
    this.inputs[index].style.border = "1px solid #00875F";
    this.inputErrorMsgs[index].style.display = "none";
  }

  isNameValidate(index) {
    if (this.inputs[index].value.length < 3) {
      this.errorInvalidInput(index);
      return false;
    } else {
      this.acceptedInput(index);
      return true;
    }
  }

  isEmailValidate(index) {
    if (this.emailRegexValidate.test(this.inputs[index].value)) {
      this.acceptedInput(index);
      return true;
    } else {
      this.errorInvalidInput(index);
      return false;
    }
  }

  isPasswordValidate(index) {
    if (this.inputs[index].value.length < 6) {
      this.errorInvalidInput(index);
      return false;
    } else {
      this.acceptedInput(index);
      return true;
    }
  }
}

export default Functions;
