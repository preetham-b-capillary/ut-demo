function main(callback1, callback2) {
    callback1();
    callback2(2,2);
}


function callback1(){
    console.log("Execution-1 Started")
    console.log("Execution-1 Completed")
}

function callback2(a,b){
    return a + b
}


module.export = {
    main: main,
    callback1: callback1,
    callback2: callback2
}
