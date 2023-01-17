interface Summary {
    getTotalVechile(vechileType?: string): number
    getTotalIncomeVechile(vechileType?: string): number
}

class Vechile {
    income: number = 0
    constructor(
        protected licensePlate: string,
        protected vechileType: string,
        protected year: number,
        protected price: number,
        protected tax: number,
        protected seat: number) {
        
    }
}

class Car extends Vechile {
    constructor(
        licensePlate: string,
        vechileType: string,
        year:number,
        price: number,
        tax: number,
        seat: number,
        private transactionDate: string) {
            super(licensePlate, vechileType, year, price, tax, seat)
    }
}

class Taxi extends Car {
    constructor (
        licensePlate: string,
        vechileType: string,
        year:number,
        price: number,
        tax: number,
        seat: number,
        transactionDate: string,
        private orderTotal:number,
        private orderPerKmPrice: number
    ) {
        super(licensePlate, vechileType, year, price, tax, seat, transactionDate)
        this.income = orderTotal * orderPerKmPrice
    }
}

class SUV extends Car {
    constructor (
        licensePlate: string,
        vechileType: string,
        year:number,
        price: number,
        tax: number,
        seat: number,
        transactionDate: string,
        private rentPrice: number,
        private driverPrice: number
    ) {
        super(licensePlate, vechileType, year, price, tax, seat, transactionDate)
        this.income = rentPrice + driverPrice
    }
}

class Plane extends Vechile {
    constructor(
        licensePlate: string,
        vechileType: string,
        year:number,
        price: number,
        tax: number,
        seat: number,
        private transactionDate: string,
        private rentPrice: number,
        private driverPrice: number) {
        super(licensePlate, vechileType, year, price, tax, seat)
        this.income = rentPrice + driverPrice
    }
}

let purchase1 = new SUV('D 1001 UM', 'SUV', 2010, 350000000, 3500000, 4, '10/01/2023', 500000, 150000)
let purchase2 = new SUV('D 1002 UM', 'SUV', 2010, 350000000, 3500000, 4, '10/01/2023', 500000, 150000)
let purchase3 = new SUV('D 1003 UM', 'SUV', 2015, 350000000, 3500000, 5, '12/01/2023', 500000, 150000)
let purchase4 = new SUV('D 1004 UM', 'SUV', 2015, 350000000, 3500000, 5, '13/01/2023', 500000, 150000)
let purchase5 = new Taxi('D 11 UK', 'Taxi', 2002, 175000000, 1750000, 4, '12/01/2023', 45, 4500)
let purchase6 = new Taxi('D 12 UK', 'Taxi', 2015, 225000000, 2250000, 4, '13/01/2023', 75, 4500)
let purchase7 = new Taxi('D 13 UK', 'Taxi', 2020, 275000000, 2750000, 4, '13/01/2023', 90, 4500)
let purchase8 = new Plane('ID8089', 'Private Jet', 2015, 150000000000, 1500000000, 12, '23/12/2022', 35000000, 15000000)
let purchase9 = new Plane('ID8099', 'Private Jet', 2018, 175000000000, 1750000000, 15, '25/12/2022', 55000000, 25000000)

let vechileList: any[] = []
vechileList.push(purchase1, purchase2, purchase3, purchase4, purchase5, purchase6, purchase7, purchase8, purchase9)

class Report {
    protected getVechilePurchase() {
        return vechileList
    }
}

class ReportChild extends Report implements Summary {
    vechilePurchase(): any[] {
        return this.getVechilePurchase()
    }
    getTotalVechile(vechileType?: string | undefined): number {
        let countVechile: number = 0
        for (const vechile of vechileList) {
            if (vechileType) {
                if (vechile.vechileType == vechileType) {
                countVechile ++
            }
        } else {
                countVechile ++
            }
        }
        return countVechile
    }

    getTotalIncomeVechile(vechileType?: string | undefined): number {
        let income: number = 0
        for (const vechile of vechileList) {
            if (vechileType) {
                if (vechile.vechileType == vechileType) {
                    income += vechile.income
                } 
            } else {
                income += vechile.income
            }
        }
        return income
    }
}

let report = new ReportChild()
console.log('Total Vechile', report.getTotalVechile())  // 9
console.log('Total SUV', report.getTotalVechile('SUV')) // 4
console.log('Total Taxi', report.getTotalVechile('Taxi'))   // 3
console.log('Total Private Jet', report.getTotalVechile('Private Jet')) // 2
console.log('Total Income All Vechile', report.getTotalIncomeVechile()) // 133545000
console.log('Total Income SUV', report.getTotalIncomeVechile('SUV')) // 2600000
console.log('Total Income Taxi', report.getTotalIncomeVechile('Taxi')) // 945000
console.log('Total Income Private Jet', report.getTotalIncomeVechile('Private Jet')) // 130000000
console.log(report.vechilePurchase())

// let report = new Report()
// console.log('Total Vechile', report.getTotalVechile())  // 9
// console.log('Total SUV', report.getTotalVechile('SUV')) // 4
// console.log('Total Taxi', report.getTotalVechile('Taxi'))   // 3
// console.log('Total Private Jet', report.getTotalVechile('Private Jet')) // 2
// console.log('Total Income All Vechile', report.getTotalIncomeVechile()) // 133545000
// console.log('Total Income SUV', report.getTotalIncomeVechile('SUV')) // 2600000
// console.log('Total Income Taxi', report.getTotalIncomeVechile('Taxi')) // 945000
// console.log('Total Income Private Jet', report.getTotalIncomeVechile('Private Jet')) // 130000000