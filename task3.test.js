const calculator = require("./task3");

describe("calculator", () => {

  test("Calculator Add(5, 5) is equel to 10", () => {
    expect(calculator.add(5, 5)).toBe(10);
  });

  test("Calculator Add(7,3) is equel to 10", () => {
    expect(calculator.add(7, 3)).toBe(10);
  });

  test("Calculator multiply(7,3) is equel to 21", () => {
    expect(calculator.multiply(7, 3)).toBe(21);
  });

  test("Calculator multiply(7,10) is equel to 70", () => {
    expect(calculator.multiply(7, 10)).toBe(70);
  });

  test("Calculator divide(10,2) is equel to 5", () => {
    expect(calculator.divide(10, 2)).toBe(5);
  });

  test("Calculator divide(6,2) is equel to 3", () => {
    expect(calculator.divide(6, 2)).toBe(3);
  });

  test("Calculator subtract(5, 1) is equel to 4", () => {
    expect(calculator.subtract(5, 1)).toBe(4);
  });

  test("Calculator subtract(5,10) is equel to -5", () => {
    expect(calculator.subtract(5,10)).toBe(-5);
  });

});
