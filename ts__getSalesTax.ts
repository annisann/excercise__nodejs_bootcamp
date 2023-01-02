function getSalesTax(price: any, tax: any) : any {
    let totalSales = price + (price * (tax/100))
    try {
        if (typeof price !== 'number' && typeof tax !== 'number'){
            throw new Error("Price dan pajak harus dalam angka");
        } else if (typeof tax !== 'number') {
            throw new Error("Pajak harus dalam angka");
        } else if (typeof price !== 'number'){
            throw new Error("Price harus dalam angka");
        } else {
            return totalSales
        }
    } catch (error: any) {
        return error.message
    }
}

console.log(getSalesTax("a", 1))
console.log(getSalesTax(1, "angka"))
console.log(getSalesTax("harga", "tax"))

console.log(getSalesTax(4500, 5))