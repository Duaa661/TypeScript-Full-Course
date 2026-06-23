const chai = {
    name: "rahul",
    price: 20,
    inHot:true
}

let tea: {
    name: string;
    price: number
    inHot:boolean
}

tea = {
    name: "mohit",
    price: 20,
    inHot:true
}

type Animal = {
    name: string
    totalcount: number
    isexist:boolean
}

const Animals: Animal = {
     name: "loin",
    totalcount: 6000,
    isexist: true
}

// code clarity
type Item = { name: string, quantity: number }
type Address = { name: string, pin: number }

type Order = {
    id: string,
    items: Item[],
    address:Address
}




