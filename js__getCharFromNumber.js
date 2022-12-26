function getCharFromNumber (num) {
    let lowerCase = []
    let upperCase = []

    for (i=0; i<127; i++) {
        if (i >= 65 & i <= 90) {
            upperCase.push(String.fromCharCode(i))
        } else if (i >= 97 & i <= 122) {
            lowerCase.push(String.fromCharCode(i))
        }
    }
    return `Lower Case: ${lowerCase}\nUpper Case: ${upperCase}`
}
