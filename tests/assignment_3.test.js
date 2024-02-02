const{sum} = require('./assignment_3');

jest.mock('./assignment_3', ()=>({
    sum:jest.fn().mockReturnValue(4)
}))


describe("test", (()=>{
    test("sum of 2 and 2 is 4",(()=>{
        expect(sum(2,2)).toBe(4)
        expect(sum).toHaveBeenCalledWith(2,2)                                              //So here we are checking ki kya humne sum function ko 2,2 paramter se hi call kiya hai ya nahi
        expect(sum).toHaveBeenCalledTimes(1)                                               // Here we are checking how many times the function has been called
    })) 
}))
