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

// test("set and value function check", () => {
//   const HM = HashMap();
//   HM.set("apple", "red");
//   HM.set("banana", "yellow");
//   HM.set("apple", "green");
//   expect(HM.value("green")).toBe(true);
//   expect(HM.value("red")).toBe(false);
// });
