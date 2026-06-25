// class Chai{
//     flavour: string;
//     price: number
//     constructor(flavour: string, price: number) {
//         this.flavour = flavour
//         this.price=price
//     }
// }
// const masalaChai = new Chai("Ginger",30)
// masalaChai.flavour = "masala"
// masalaChai.price = 20


// class Chai {
// PUBLIC
//     public flavor: string = "Masala"
// PROTECTED
//     private secretingredients = "Cardamom"
//     reveal() {
//         return this.secretingredients
//     }
//     protected shopName="Chai corner"
// }

// class Branch extends

// const c = new Chai()
// c.reveal()

// PRIVATE
class Wallet{
    #balance = 100
    getBalance() {
        return this.#balance;
    }
}

const c = new Wallet()
c.getBalance()


// get set
class ModerChai{
    private_sugar = 2
    
    get sugar() {
        return this.sugar
    }
    set sugar(value: Number) {
        if (value > 5) {
            throw new Error("Too Sweet")
        }
        this.private_sugar=3
    }
}