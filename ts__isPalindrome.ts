function isTheNumberPalindrome(numbers:any) {
    try {
        if (isNaN(+numbers)) {
            throw new Error(`${arguments[0]} is not a number`)
        }
        numbers = numbers.toString()
        for (let i=0; i<=numbers.length;i++){
            if (numbers.charAt(i) !== numbers.charAt(numbers.length-i-1)) {
                return `${arguments[0]} is not a palindrome`
            } else {
                return `${arguments[0]} is a palindrome`
            }
        }
    } catch (error:any) {
        return error.message
    }
}

console.log(isTheNumberPalindrome("abcd"))  // abcd is not a number
console.log(isTheNumberPalindrome("123a"))  // 123a is not a number
console.log(isTheNumberPalindrome("1234"))  // 1234 is not a palindrome
console.log(isTheNumberPalindrome(1221))    // 1221 is a palindrome
console.log(isTheNumberPalindrome(8888))    // 8888 is a palindrome