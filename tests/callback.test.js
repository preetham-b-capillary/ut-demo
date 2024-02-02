const callbacks = require('./callback');

it('testing callback values', ()=>{
    jest.spyOn(callbacks, 'cb1').mockReturnValue('hello there');

    expect(callbacks.actualFunction(callbacks.cb1, callbacks.cb2)).toStrictEqual({cb1: 'hello there', cb2: 'cb2'});
})