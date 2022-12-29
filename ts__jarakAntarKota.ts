function hitungJarakAntarKota(acceleration: any, time: any):any {
    let distance = 1/2 * acceleration * Math.pow(time, 2)
    try {
        if (acceleration <= 0 || time <= 0){
            throw new Error("Acceleration or time must be > 0")
        }

        if (typeof acceleration == 'number' || typeof time == 'number') {
            return distance
        } else {
            throw new Error("Input must be a number.")
        }
    } catch (error: any) {
        return error.message
    }
}

console.log(hitungJarakAntarKota(0, 9))
