const stringLength = require('./task1.js')

it('Check string length', ()=>{
    const word = "Hello"
    expect(stringLength(word)).toBe(word.length)
})

it('Check string bigger than 10', ()=>{
    const word = "HelloWorldAndMoon"
    expect(()=>stringLength(word)).toThrow(Error)
})

it('Check string is 0', ()=>{
    const word = ""
    expect(()=>stringLength(word)).toThrow(Error)
})
