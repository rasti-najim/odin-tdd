const { capilize, reverseString } = require("./index");

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
