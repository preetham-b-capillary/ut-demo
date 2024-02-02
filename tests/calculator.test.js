const {add,subtract,multiply,divide}=require('../calculator');


// Mocking the calculator.js module
jest.mock('../calculator',()=>{
    return {
        add:(...args)=>{
            let res=0;
            args.forEach((num)=>{
                res+=num;
            })
            return res;
        },
        multiply:(...args)=>{
            let res=1;
            args.forEach((num)=>{
                res*=num;
            })
            return res;
        },
        subtract:(...args)=>{
            let res=args[0];
            args.forEach((num)=>{
                res-=num;
            })
            res+=args[0];
            return res;
        },
        divide:(a,b)=>{
            return a/b;
        }
    }
});

test("Addition Testing",()=>{
    expect(add(1,2,3,4)).toBe(10);
})

test("Subtraction Testing",()=>{
    expect(subtract(20,3,4,5,8)).toBe(0);
})

test("Multiplication Testing",()=>{
    expect(multiply(4,2,2)).toBe(16);
})

test("Division Testing",()=>{
    expect(divide(4,2)).toBe(2);
})