const { add, subtract, multiply, modulo } = require("./calculator");



describe("Tests",()=>{
  

//  ---->  describe is basically used to create a collection of test




test('multiplication', ()=>{
    expect(multiply(2,2,2,3)).toBe(24);
  })
  
  
  // include n parameters in multipliciation
  
  test('10 modulo 4 should be 2', ()=>{
    expect(modulo(10,4)).toBe(2)
  })



 

})