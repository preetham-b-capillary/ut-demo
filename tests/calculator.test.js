const { Add, Subtract, Multiply, Divide } = require("../calculator/calculator");
const calculatorImport = require("../calculator/calculator");

// jest.mock("../calculator/calculator", () => {
//   return {
//     Add: (...args) => {
//       let result = 0;
//       args.forEach((val) => {
//         result += val;
//       });
//       return result;
//     },
//   };
// });

// it("Add 3 number", () => {
//   expect(Add(10, 2, 10)).toBe(22);
//   expect(Add(10, 2, 10, 10)).toBe(32);
//   expect(Add(10, 2, 10, 10, 2, 43, 5, 6, 7)).toBe(95);
// });

it("testing spyon addition", ()=>{
    jest.spyOn(calculatorImport, 'Add');
    jest.spyOn(calculatorImport, 'Subtract');
    const val1 = calculatorImport.Add(2,3)
    const val2 = calculatorImport.Subtract(2,3)
    expect(val1).toBe(5)
    expect(val2).toBe(-1)
})

test("correctly adds numbers", () => {
  expect(Add(1, 2)).toBe(3);
});

test("subtraction works", () => {
  expect(Subtract(4, 2)).toBe(2);
});

test("correctly multiplies", () => {
  expect(Multiply(2, 2)).toBe(4);
});

test("correctly divides", () => {
  expect(Divide(10, 2)).toBe(5);
  expect(Divide(10, 0)).toBe("inf");
});
