const additionCalculator = require("./add");

test("Test Empty String", () => {
    expect(additionCalculator("")).toBe(0);
});

test("Test Single Number", () => {
    expect(additionCalculator("1")).toBe(1);
});

test("Test Multiple Numbers", () => {
    expect(additionCalculator("1,2")).toBe(3);
});

test("Test New Line", () => {
    expect(additionCalculator("1\n2,3\n4")).toBe(10);
});

test("Test Negative Single Number", () => {
    expect(() => additionCalculator("-1,2")).toThrow("Negatives not allowed: -1");
});

test("Test Negative Multiple Number ", () => {    
    expect(() => additionCalculator("1,-2,3,-5")).toThrow("Negatives not allowed: -2,-5");
});

test("Test Over Thousand", () => {
    expect(additionCalculator("1000,10")).toBe(1010);
});

test("Test Other Delimiter", () => {
    expect(additionCalculator("//;\n1;2")).toBe(3);
});