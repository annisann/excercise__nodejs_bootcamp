function sumDigit(numbers:any):any{
    let sum = 0
    try {
        // throw an error if `numbers` is above 10.000
        if (numbers > 10000){
            throw new Error(`${arguments[0]} harus lebih kecil dari 10000`);
        }

        // sum the numbers
        for(let number of numbers.toString()){
            if (isNaN(parseInt(number))){ // if not a number
                throw new Error(`${arguments[0]} is not a number, try again...`)
            } else {
                sum += parseInt(number)
            }   
        }
    } catch (error:any) {
        return error.message
    }    
    return sum
}

console.log(sumDigit(1234))     // 10
console.log(sumDigit("1234"))   // 10
console.log(sumDigit(12345))    // 12345 harus lebih kecil dari 10000
console.log(sumDigit("a123"))   // a123 is not a number, try again...