// interface Chai{
//     flavor: string,
//     price: number,
//     milk?:boolean
// }

// const masala: Chai = {
//     flavor: "masala",
//     price:300
// }


// interface Shop{
//     readonly id: number,
//     name:string
// }


// const s: Shop = { id: 1, name: "Chaicode caffe" }

// // One more example
// interface DiscountCalculator{
//     (price:number):number
// }

// const apply50: DiscountCalculator = (p) => p * 0.5

// Try more one example
interface TeaMachine{
    start(): void;
    stop(): void;
}

const machine: TeaMachine = {
    start() {
        console.log("Start car engine")
    },
    stop() {
        console.log("Stop the Car")
    }
}



interface ChaiRating{
    [flavor:string]:number
}

const ratings: ChaiRating = {
    masala: 8,
    ginger: 8
    
}
// multiple interface user
interface User{
    name:string
}

interface User{
    age:number
}

const u: User = {
    name: "Hitesh",
    age:22
}

interface A{ a: string }
interface B{ b: string }

interface C extends A, B{
    a: "Rahul",
    b: "Mohit",
    c: "Mohan",
    d:"sjncje"
}



// Generics



// function wrapInArray<T>(item: T): T[]{
//     return [item]
// }

// wrapInArray("Masala")
// wrapInArray(20)
// wrapInArray({ flavor:"Masala"})
// wrapInArray(["nikhil"])


// function pair<A, B>(a: A, b: B):[A,B] {
//     return [a,b]
// }


// pair("Masala", "test")
// pair("Masala", {})
// pair("Masala", [])

// interface Box<T>{
//     content:T
// }

// const numberBox:Box<number>={content:10}


//Realworld Example generics
interface APiPromise<T>{
    status: number,
    data:T
}

const res: APiPromise<{ flavor: string }>={
    status: 200,
    data:{flavor:"string"}
}