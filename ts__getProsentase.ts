function getProsentase(income1:any, income2:any):any {
    try {
        if (isNaN(+income1) || isNaN(+income2)) {
            throw new Error(`${income1} or ${income2} harus dalam angka`)
        }

        let difference = income2 - income1
        let differencePercentage = difference / income1 * 100
        if (difference > 0) {
            return `Total kenaikan income ${Math.floor(differencePercentage)}%`
        } else {
            return `Total penurunan income ${Math.floor(differencePercentage)}%`
        }

    } catch (error:any) {
        return error.message
        
    }
}

console.log(getProsentase("abc", "bca"))    // abc or bca harus dalam angka
console.log(getProsentase(60,75))           // Total kenaikan income 25%
console.log(getProsentase(75,65))           // Total penurunan income -14%