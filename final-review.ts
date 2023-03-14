abstract class Entity {
    constructor(public entityId: number) {
    }
}

class Bank extends Entity {
    bankName: string;
    constructor(entityId: number, name: string) {
        super(entityId)
        this.bankName = name
    }

    getName() {
        return this.bankName
    }
}

class PaymentGateaway extends Entity {
    pagaName: string;
    constructor(entityId: number, name: string) {
        super(entityId)
        this.pagaName = name
    }

    getName() {
        return this.pagaName
    }
}

const bca = new Bank(1, "BCA")
const mandiri = new Bank (2, "Mandiri")
const goto = new PaymentGateaway(3, "GoTo")

const data: any[] = []
data.push(bca, mandiri, goto)

data.forEach(d => console.log(d))