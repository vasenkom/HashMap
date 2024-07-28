const { HashMap } = require("./index");

test("correctness of output of hash function", () => {
  const HM = HashMap();

  expect(HM.hash("Sara") == HM.hash("raSa")).toBe(false);

  expect(() => HM.hash(null)).toThrow("No key provided");
  expect(() => HM.hash("")).toThrow("No key provided");
});
