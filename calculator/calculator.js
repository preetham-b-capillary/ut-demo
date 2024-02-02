function Add(a, b){
    return a+b;
}

function Subtract(a, b){
    return a-b;
}

function Multiply(a, b){
    return a*b;
}

function Divide(a, b){
    if(b!=0)
        return a/b;
    else
        return "inf";
}

console.log("****add", Add)
module.exports = {Add, Subtract, Multiply, Divide};