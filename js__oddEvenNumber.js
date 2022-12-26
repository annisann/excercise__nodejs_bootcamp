function oddEvenNumber (startNumber, endNumber) {
    let evenNumber = []
    let oddNumber = []

    for (let i=startNumber; i<=endNumber; i++) {
        if (i % 2 !== 0) {
            oddNumber.push(i)
        }
        if (i % 2 == 0) {
            evenNumber.push(i)
        }
    }
    return `Odd Number: ${oddNumber}\nEven Number: ${evenNumber}`
}
