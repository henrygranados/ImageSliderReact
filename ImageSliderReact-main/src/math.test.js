import { addNumbers } from "./math.js";

describe("addNumbers", () => {
  test("adds two positive numbers", () => {
    expect(addNumbers(2, 3)).toBe(5);
  });

  test("adds positive and negative numbers", () => {
    expect(addNumbers(5, -3)).toBe(2);
  });

  test("adds two negative numbers", () => {
    expect(addNumbers(-2, -3)).toBe(-5);
  });

  test("adds zero to a number", () => {
    expect(addNumbers(5, 0)).toBe(6);
  });
});
