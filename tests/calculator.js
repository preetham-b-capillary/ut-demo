function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a-b
}

//Added the rest paramters for taking n paramters
function multiply(...numbers){
  if(numbers.length === 0){
    return 0
  }
  return numbers.reduce((product, number) => product * number, 1);
}


function modulo(a,b){
    return a%b
}

module.export = {
    add: add,
    subtract: subtract,
    multiply: multiply,
    modulo: modulo
}