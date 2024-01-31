const { nonGeneratorF, myGenerator } = require("./generator");

jest.mock('./generator.js', () => {
    return {
        myGenerator: jest.fn(function *() {
            yield "prod1";
            yield "prod2";
            yield "prod3";
            yield "prod4";
            yield "prod5";
        }),
        nonGeneratorF: jest.fn(),
        sumOf: jest.fn(),
    }
})
describe("Test generator [UNIT]", () => {
  it("Test nongenerator", () => {
    expect(nonGeneratorF()).toBe('live');
  });

  it.skip('Test generator', () => {
    console.log("********myGenerator", myGenerator)

    const gen = myGenerator();
    console.log("********gen", gen)
    expect(gen.next().value).toBe('test1')
    expect(gen.next().value).toBe('test2')
    expect(gen.next().value).toBe('test3')
    expect(gen.next().value).toBe('test4')
    expect(gen.next().value).toBe('test5')
    expect(gen.next().value).toBeUndefined()
  })

  it.only('Test generator', () => {
    console.log("********myGenerator", myGenerator)

    const gen = myGenerator();
    console.log("********gen", gen)
    expect(gen.next().value).toBe('prod1')
    expect(gen.next().value).toBe('prod2')
    expect(gen.next().value).toBe('prod3')
    expect(gen.next().value).toBe('prod4')
    expect(gen.next().value).toBe('prod5')
    expect(gen.next().value).toBeUndefined()
  })

});
