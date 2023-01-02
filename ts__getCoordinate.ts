function getCoordinateinCartesius(x1:any, y1:any, x2:any, y2:any) : any {
    const d = Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2))
    try {
        if (
            typeof parseInt(x1) !== 'number' || typeof parseInt(x2) !== 'number' || 
            typeof parseInt(y1) !== 'number' || typeof parseInt(y2) !== 'number'
            ){
                throw new Error('Input koordinat dalam angka')
        }
    } catch (error:any) {
        return error.message
    }
    return d
}

console.log(getCoordinateinCartesius(3, "4",-4,-5))