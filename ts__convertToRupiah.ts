const currencyRates: {[key:string]:number} = {
    yen: 119.13,
    usd: 15570,
    euro: 16627
}
function convertToRupiah(value:number, currencyType:string):string {
    let inRupiah = value * currencyRates[currencyType]
    
    try {
        if (isNaN(currencyRates[currencyType])) {
            throw new Error("No match type currency")
        }
    } catch (error:any) {
        return error.message
    }
    return `${arguments[0]} ${arguments[1]} = Rp.${inRupiah}`
}

console.log(convertToRupiah(100, ''))