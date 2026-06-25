const chaiFlavours: string[] = ["masala", "ginger"]
const chaiprice: number[] = [20, 30]

const rating: Array<number> = [4.5, 5]

type Chai = {
    name: string;
    price:number
}

const menu: Chai[] = [
    { name: "Masala", price: 12 },
    { name: "Ginger", price: 40 },
    {name:"Ginger",price:40}
]

// const cities: readonly string[] = ["Delhi", "Jaipur"]
// cities.push('Pune')

const table: number[][] = [
    [1,2,3],[4,56,2]
]

let chaiType: [string, number];

chaiType = ["Masala", 30];

chaiType[0] = "Ginger"
chaiType[1] = 49


let userInfo: [string, number, boolean?]
userInfo = ["hitesh", 30, true]

userInfo[0] = "Dushyant"
userInfo[1] = 22
userInfo[2] = false

const location: readonly [number, number] = [28.66, 32.22]

const chaiItems: [name: string, price: number] = ["Masla", 25]


enum CupSize{
    SMALL,
    MEDIUM,
    LARGE
}

const size=CupSize.LARGE