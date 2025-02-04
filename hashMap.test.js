const { HashMap } = require("./index");

test("correctness of output of hash function", () => {
  const HM = HashMap();

  expect(HM.hash("Sara") == HM.hash("raSa")).toBe(false);

  expect(() => HM.hash(null)).toThrow("No key provided");
  expect(() => HM.hash("")).toThrow("No key provided");
});

test("set and get function check", () => {
  const HM = HashMap();
  HM.set("apple", "red");
  HM.set("banana", "yellow");
  HM.set("apple", "green");
  expect(HM.get("apple")).toBe("green");
  expect(HM.get("banana")).toBe("yellow");
});

test("remove function check", () => {
  const HM = HashMap();
  HM.set("hat", "black");
  HM.set("frog", "green");
  HM.set("ice cream", "white");
  HM.remove("hat");
  expect(HM.get("hat")).toBe(null);
  expect(HM.get("frog")).toBe("green");
});

test("set and has function check", () => {
  const HM = HashMap();
  HM.set("apple", "red");
  HM.set("banana", "yellow");
  HM.set("apple", "green");
  HM.set("hat", "black");
  HM.remove("hat");
  expect(HM.has("apple")).toBe(true);
  expect(HM.has("hat")).toBe(false);
  expect(HM.has("banana")).toBe(true);
});

test("length function check", () => {
  const test = HashMap();
  test.set("jacket", "blue");
  test.set("kite", "pink");
  test.set("lion", "golden");
  test.remove("jacket");
  expect(test.length()).toBe(2);
});

test("clear function check", () => {
  const test = HashMap();
  test.set("jacket", "blue");
  test.set("kite", "pink");
  test.set("lion", "golden");
  test.clear();
  expect(test.length()).toBe(0);
  expect(test.has("jacket")).toBe(false);
  expect(test.has("kite")).toBe(false);
});

test("keys and values function check", () => {
  const test = HashMap();
  test.set("carrot", "orange");
  test.set("dog", "brown");
  test.set("elephant", "gray");
  expect(test.keys()).toContain("carrot", "dog", "elephant"); //  because its hard to predict the order
  expect(test.values()).toContain("orange", "brown", "gray");
});

test("entries function check", () => {
  const test = HashMap();
  test.set("carrot", "orange");
  test.set("dog", "brown");
  test.set("elephant", "gray");

  // Extract entries and sort them to avoid order issues
  const actualEntries = test.entries().sort();
  const expectedEntries = [
    ["carrot", "orange"],
    ["dog", "brown"],
    ["elephant", "gray"],
  ].sort();

  expect(actualEntries).toEqual(expectedEntries);
});
