const { nonGeneratorF, myGenerator, sumOf } = require("./generator");

var mockGenSecond;
jest.mock('./generator.js', () => {
  mockGenSecond = jest.fn();
    return {
      ...jest.requireActual('./generator.js'),
        myGenerator: jest.fn(function *() {
            yield "prod1";
            yield mockGenSecond();
            yield "prod3";
            yield "prod4";
            yield "prod5";
        }),
        nonGeneratorF: jest.fn(),
    }
})

console.log("***sumOf", sumOf(1,2))
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

  it.skip('Test generator', () => {
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

  it.only('Test generator', () => {
    console.log("********myGenerator", myGenerator)
    mockGenSecond.mockReturnValueOnce('demo2')

    const gen = myGenerator();
    console.log("********gen", gen)
    expect(gen.next().value).toBe('prod1')
    expect(gen.next().value).toBe('demo2')
    expect(gen.next().value).toBe('prod3')
    expect(gen.next().value).toBe('prod4')
    expect(gen.next().value).toBe('prod5')
    expect(gen.next().value).toBeUndefined()
  })

  it.only('Test generator', () => {
    console.log("********myGenerator", myGenerator)
    mockGenSecond.mockReturnValueOnce('dev2')

    const gen = myGenerator();
    console.log("********gen", gen)
    expect(gen.next().value).toBe('prod1')
    expect(gen.next().value).toBe('dev2')
    expect(gen.next().value).toBe('prod3')
    expect(gen.next().value).toBe('prod4')
    expect(gen.next().value).toBe('prod5')
    expect(gen.next().value).toBeUndefined()
  })
});
