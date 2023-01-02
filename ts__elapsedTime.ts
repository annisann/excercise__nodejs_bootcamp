function elapsedTime(seconds:any):any {
    const days = Math.floor(seconds/(3600*24))
    const hours = Math.floor(seconds%(3600*24)/3600)
    const minutes = Math.floor(seconds%3600/60)
    const secs = Math.floor(seconds%60)
    try {
        if (isNaN(parseInt(seconds))) {
            throw new Error(`${arguments[0]} is not a number`)
        }
        return `${days} hari ${hours} jam ${minutes} menit ${secs} detik`
    } catch (error:any) {
        return error.message
    }
}