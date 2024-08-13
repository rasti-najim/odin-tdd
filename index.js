function capilize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseString(str) {
  if (typeof str !== "string") {
    throw new Error("Expected a string");
  }
  return str.split("").reverse().join("");
}

module.exports = { capilize, reverseString };
