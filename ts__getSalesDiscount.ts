function getSalesDiscount(price:any, tax:any, discount?:any)  {
    // formula
    let discountedPrice = price * (discount/100)
    let priceAfterDiscount =  price - discountedPrice
    let taxPrice = priceAfterDiscount * (tax/100)
    let priceAfterDiscountAndTax = priceAfterDiscount + taxPrice
    
    const args = {
        price: price,
        tax:tax,
        discount:discount
    }
    const errorParams:string[] = []
    try {
        // return error
        for (const [key, val] of Object.entries(args)){
            if (typeof val !== 'number') {
                errorParams.push(`${key}`)
            }
        }
        if (errorParams.length > 1){
            throw errorParams
        }
    } catch (error:any) {
        const errorMessage = errorParams.join(', ') + ' harus merupakan angka'
        return errorMessage
    }
    return priceAfterDiscountAndTax
}

console.log(getSalesDiscount(4500, 10, 5))      // 4702.5
console.log(getSalesDiscount(4500, "10", "5"))  // tax, discount harus merupakan angka