function getDays(month:any, year:any):any {
    const args = {
        month: month,
        year: year
    }

    const errorParams: string[] = []

    try {
        for (const [key, val] of Object.entries(args)) {
            if (isNaN(parseInt(val))) {
                errorParams.push(`${key}`)
            }
        }

        if (errorParams.length > 0) {
            throw errorParams
        }

        if (month==2) {
            if ((parseInt(year)%4==0 && !(parseInt(year)%100)) || parseInt(year)%400==0) {
                return `This month has 29 days, ${year} adalah tahun kabisat`
            } else {
                return `This month has 28 days`

            }
        } else if (
            (month >= 1 && month <= 7) && month % 2 !== 0 ||
            (month >=8 && month <= 12) && month % 2 == 0
            ) {
            return `This month has 31 hari`
        } else {
            return `This month has 30 days`
        }
        
    } catch (error:any) {
        const errorMessage = `Inputan ${errorParams.join(" & ")} harus dalam integer`
        return errorMessage
    }
}

console.log(getDays("a",2021))
console.log(getDays("2","year"))
console.log(getDays("m",2021))
console.log(getDays(2,2000))
console.log(getDays("7",2021))