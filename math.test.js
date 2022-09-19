//unit-test
const {divide,multiply, subtract,sum} = require("./math")

describe("Math", ()=>
test("should sum 2 + 2 to be 4", () => {
    const result = sum(2,2);
    expect(result).toBe(4);
}))
it("should multiply 3 * 3 to be 9", () => {

    const result = multiply(3,3);
    expect(result).toBe(9);
})
it("should divide 10 / 2 to be 5", () => {

    const result = divide(10,2);
    expect(result).toBe(5);
    expect(result).toBeGreaterThan(4);

})
it("should subtract 10 - 2 to be 8", () => {

    const result =subtract (10,2);
    expect(result).toBe(8);
});
//falsy values (), undefined, null, "", '', [], {}, 0
it("should be falsy", () =>{
    expect("").toBeFalsy();
})

test ("Array", ()=> {
    let days = ["monday","tuesday","wednesday", "thursday"]
    expect(days).toContain("tuesday")
    expect(days).not.toContain("saturday")
})