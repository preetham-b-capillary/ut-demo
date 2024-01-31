const generatorF= require("./generator");

describe("Test generator [UNIT]", () => {
  it.only('Test generator', () => {
    const mySpy = jest.spyOn(generatorF, 'myGenerator');
    console.log("********mySpy",mySpy)
    mySpy.mockReturnValueOnce('demo2')
    const gen = generatorF.myGenerator();
    console.log("********gen", gen)
    expect(gen).toBe('demo2')
  })

  it('Test generator', () => {
    console.log("********generatorF.myGenerator", generatorF.myGenerator)
    const gen = generatorF.myGenerator();
    console.log("********gen", gen)
    expect(gen.next().value).toBe('prod1')
    expect(gen.next().value).toBe('dev2')
    expect(gen.next().value).toBe('prod3')
    expect(gen.next().value).toBe('prod4')
    expect(gen.next().value).toBe('prod5')
    expect(gen.next().value).toBeUndefined()
  })
});
