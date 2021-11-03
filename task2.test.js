const reverseString = require('./task2')

it('rafael will return leafar', ()=>{
    let word = "rafael"
    expect(reverseString(word)).toBe("leafar")
})