function getHeavier(w1:number, w2:number, w3:number):number {
    let max: number= 0
    for (const argIndex in arguments){
        if (arguments[argIndex] > max) {
            max = arguments[argIndex]
        }
    }
    return max
}