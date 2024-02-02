// test.todo("to be implemented")

const { main, callback1, callback2}  = require("./assignment_2")  // --->Imports in this manner



jest.mock('./assignment_2', ()=>({
    callback2: jest.fn().mockReturnValue(10)
}))

describe("Tests",()=>{

    test("mocking-2nd callback",(()=>{
        expect(callback2(5,5)).toBe(10)
    }))
})

