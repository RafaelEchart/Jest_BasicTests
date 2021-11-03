const calculator = (()=>{
    const add = (a,b) => a+b
    

    function multiply(a,b){
        return a*b
    }

    function subtract(a,b){
        return a-b
    }

    function divide(a,b){
        return a/b
    }

    return {add, multiply, divide, subtract}

})()

module.exports = calculator