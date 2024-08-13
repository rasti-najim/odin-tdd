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

module.exports = { capilize, reverseString, calculator };
