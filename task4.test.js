it('Check string is 0', ()=>{
    const word = "rafael"
    expect(capitalizeString(word)).toBe("Rafael")
})

const capitalizeString = (word) => {
   return word.charAt(0).toUpperCase() + word.slice(1)
}