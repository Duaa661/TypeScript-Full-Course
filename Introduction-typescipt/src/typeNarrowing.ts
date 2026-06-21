function getchai(kind: string : number) {
    if (typeof kind === "string") {
        return `Making ${kind} chai`
    }
    else {
        return `Chai order:${kind}`
    }
}

function orderchai(size: "small" | "medium" | "large" | number) {
    if (size === "small") {
        return "Small cutting chai..."
    }
    else if (size === "medium" || size === "large") {
        return "Make strong and rich chai"
    }
    return `chai order ${size}`
}

class kulladchai{
    serve() {
        return "Kullad chai serving..."
    }
}
class masalachai{
    serve() {
        return "Masala chai serving..."
    }
}

function serve(chai: kulladchai | masalachai) {
    if (chai instanceof masalachai) {
        return chai.serve()
    }
}

type chaiOrder = {
    type: string,
    sugar: number
}


function inchaiorder(obj :any):obj is chaiOrder{
    return (
        typeof obj === "object"
        && obj !== null
        && typeof obj.type === "string"
        && typeof obj.type === "number"
    )
}


type chneseschai = { type: "masala"; spicelevel: number }
type gingerchai = { type: "ginger"; spicelevel: number }
type elachichai = { type: "elachi"; spicelevel: number }


type chai = chneseschai | gingerchai | elachichai

function makchai(order: chai) {
    switch (order.type) {
        case  "masala":
            return `Chinese chai`
        case "elachi":
            return `Ginger chai`
        case "elachi":
            return `Elachi chai`
    }
}