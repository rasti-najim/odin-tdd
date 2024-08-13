function capilize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseString(str) {
  if (typeof str !== "string") {
    throw new Error("Expected a string");
  }
  return str.split("").reverse().join("");
}

function calculator() {
  return {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    divide: (a, b) => {
      if (b !== 0) {
        return a / b;
      } else {
        throw new Error("Cannot divide by zero");
      }
    },
    multiply: (a, b) => a * b,
  };
}

function caesarCipher() {
  let encrypt = (str, shift) => {
    return str
      .split("")
      .map((char) => {
        let charCode = char.charCodeAt(0);
        if (charCode >= 65 && charCode <= 90) {
          return String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) {
          return String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
        } else {
          return char;
        }
      })
      .join("");
  };

  let decrypt = (str, shift) => {
    return str
      .split("")
      .map((char) => {
        let charCode = char.charCodeAt(0);
        if (charCode >= 65 && charCode <= 90) {
          return String.fromCharCode(((charCode - 65 - shift + 26) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) {
          return String.fromCharCode(((charCode - 97 - shift + 26) % 26) + 97);
        } else {
          return char;
        }
      })
      .join("");
  };

  return { encrypt, decrypt };
}

module.exports = { capilize, reverseString, calculator, caesarCipher };
