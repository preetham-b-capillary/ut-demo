function cb1() {
    return 'cb1'
}
function cb2() {
    return 'cb2'
}

function actualFunction(cb1, cb2) {
    return {
        cb1: cb1(),
        cb2: cb2(),
    }
}

module.exports = {
    cb1,
    cb2,
    actualFunction,
}

