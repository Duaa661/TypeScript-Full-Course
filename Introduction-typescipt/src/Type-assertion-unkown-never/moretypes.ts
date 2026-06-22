let response:any="42"


let numericlength: number = (response as string).length

type Book = {
    name:string
}


let bookString = '{"name":"Who"}'

let bookobject = JSON.parse(bookString) as Book

console.log(bookobject.name)

const inputElement = document.getElementsByClassName("username") 


let value: any
value = "chai"
value = [1, 2, 3]
value = 2.3

value.toUpperCase()



let newvalue: unknown
newvalue = "chai"
newvalue = [1, 2, 3]
newvalue = 2.3

if (typeof newvalue === "string") {
    newvalue.toUpperCase()
}


try {
    
} catch (error) {
    if (error instanceof Error) {
        console.log(error.message)
    }
    console.log("Error",error)
}

type Role = "admin" | "user"

function redirectBasedOnRole(role: Role): void{
    if (role === "admin") {
        console.log("Redirecting to admin dashboard")
        return
    }
    
    if (role === "user") {
        console.log("Redirecting to User dashboard")
        return
    }

    role
}


// Docs
