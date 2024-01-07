const { generate } = require("./dist");

console.log(
  generate(20, {
    symbols: false,
    numbers: false,
    upperLetters: false,
    lowerLetters: false,
  })
);
