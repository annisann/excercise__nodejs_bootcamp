function hitungLuasAreaLingkaran(radius: number|string): any {
    try {
        if (typeof radius !== 'number'){
            throw new Error("Inputan harus dalam angka")
        }

        if (radius > 0) {
            return Math.PI * Math.pow(radius, 2)
        } else {
            throw new Error("Try higher number")
        }
    } catch (error: any) {
       return (`An error occured: ${error.message}`)
    }
}

console.log(hitungLuasAreaLingkaran(0))