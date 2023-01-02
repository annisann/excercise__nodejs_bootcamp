function totalGaji(gaji1:number, gaji2:number, gaji3:number) {
    let pajak:number = 0
    let gajiArray:number[] = []
    let totalGaji = 0
    
    let str:string = 'Total gaji yang harus dibayar:\n'
    for (const [index, arg] of Object.entries(arguments)) {
        if (arg >= 12000) {
            pajak = 10
        } else if (arg >= 2000 && arg < 12000) {
            pajak = 5
        } else {
            pajak = 2
        }
        
        let gajiAfterPajak = arg + (arg * (pajak/100))

        gajiArray.push(gajiAfterPajak)
        str += `Emp${parseInt(index)+1}: Rp. ${arg} + Pajak (${pajak}%) = Rp. ${gajiAfterPajak}\n`
    }
    // calculate total gaji
    gajiArray.forEach((gaji) => {
        totalGaji += gaji
    })
    str += `Total: Rp. ${totalGaji}` 
    return str
}

console.log(totalGaji(500, 2000, 12000))
/*
    Total gaji yang harus dibayar:
    Emp1: Rp. 500 + Pajak (2%) = Rp. 510
    Emp2: Rp. 2000 + Pajak (5%) = Rp. 2100
    Emp3: Rp. 12000 + Pajak (10%) = Rp. 13200
    Total: Rp. 15810
*/