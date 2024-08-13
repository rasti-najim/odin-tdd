const { capilize, reverseString, calculator } = require("./index");

test("works", () => {
  expect(1).toBe(1);
});

describe("capilize", () => {
  it("capitalizes first letter", () => {
    expect(capilize("foo")).toBe("Foo");
  });

  it("works with single letter", () => {
    expect(capilize("f")).toBe("F");
  });

  it("works with empty string", () => {
    expect(capilize("")).toBe("");
  });

  it("works with numbers", () => {
    expect(capilize("1")).toBe("1");
  });

  it("works with symbols", () => {
    expect(capilize("!")).toBe("!");
  });

  it("works with words", () => {
    expect(capilize("foo bar")).toBe("Foo bar");
  });
});

describe("reverseString", () => {
  it("reverses string", () => {
    expect(reverseString("foo")).toBe("oof");
    expect(reverseString("boo")).toBe("oob");
  });

  it("works with single letter", () => {
    expect(reverseString("f")).toBe("f");
  });

  it("works with empty string", () => {
    expect(reverseString("")).toBe("");
  });

  it("works with numbers", () => {
    expect(reverseString("123")).toBe("321");
  });

  it("works with symbols", () => {
    expect(reverseString("!@#")).toBe("#@!");
  });

  it("works with words", () => {
    expect(reverseString("foo bar")).toBe("rab oof");
  });

  it("works with sentences", () => {
    expect(reverseString("foo bar baz")).toBe("zab rab oof");
  });

  it("works with sentences with symbols", () => {
    expect(reverseString("foo# bar@ baz!@#")).toBe("#@!zab @rab #oof");
  });

  it("works with sentences with numbers", () => {
    expect(reverseString("foo 123 bar 456 baz 789")).toBe(
      "987 zab 654 rab 321 oof"
    );
  });

  it("works with sentences with symbols and numbers", () => {
    expect(reverseString("foo 123 bar 456 baz 789!@#")).toBe(
      "#@!987 zab 654 rab 321 oof"
    );
  });

  it("handles non-string input", () => {
    expect(() => reverseString(123)).toThrow("Expected a string");
  });
});

describe("calculator", () => {
  it("adds", () => {
    const { add } = calculator();
    expect(add(1, 2)).toBe(3);
    expect(add(1, -2)).toBe(-1);
    expect(add(1, 0)).toBe(1);
    expect(add(0, 0)).toBe(0);
    expect(add(-10, -20)).toBe(-30);
  });

  it("subtracts", () => {
    const { subtract } = calculator();
    expect(subtract(1, 2)).toBe(-1);
    expect(subtract(1, -2)).toBe(3);
    expect(subtract(1, 0)).toBe(1);
    expect(subtract(0, 0)).toBe(0);
    expect(subtract(-10, -20)).toBe(10);
    expect(subtract(-10, 20)).toBe(-30);
    expect(subtract(10, 20)).toBe(-10);
  });

  it("divides", () => {
    const { divide } = calculator();
    expect(divide(1, 2)).toBe(0.5);
    expect(divide(1, -2)).toBe(-0.5);
    expect(() => divide(1, 0)).toThrow("Cannot divide by zero");
    expect(() => divide(0, 0)).toThrow("Cannot divide by zero");
    expect(divide(-10, -20)).toBe(0.5);
    expect(divide(-10, 20)).toBe(-0.5);
  });

  it("multiplies", () => {
    const { multiply } = calculator();
    expect(multiply(1, 2)).toBe(2);
    expect(multiply(1, -2)).toBe(-2);
    expect(multiply(1, 0)).toBe(0);
    expect(multiply(0, 0)).toBe(0);
    expect(multiply(-10, -20)).toBe(200);
  });
});
