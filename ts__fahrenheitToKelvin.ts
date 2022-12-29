function fahrenheitToKelvin(degree:any) : any {
    let kelvin = (degree + 459.67) / 1.8
    try {
        if (typeof degree !== 'number'){
            throw new Error("Fahrenheit degree must be a number")
        } else {
            return kelvin
        }
    } catch (error: any) {
        return error.message
    }
}

console.log(fahrenheitToKelvin("23"))