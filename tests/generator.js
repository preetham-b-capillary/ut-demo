function nonGeneratorF() {
  return "live";
}

function* myGenerator() {
  yield "test1";
  console.log("******myGenerator test1");
  yield "test2";
  console.log("******myGenerator test2");

  yield "test3";
  console.log("******myGenerator test3");

  yield "test4";
  console.log("******myGenerator test4");

  yield "test5";
  console.log("******myGenerator end");
}

function sumOf(a, b) {
  return a + b;
}
module.exports = {
  nonGeneratorF: nonGeneratorF,
  sumOf: sumOf,
  myGenerator: myGenerator,
};
