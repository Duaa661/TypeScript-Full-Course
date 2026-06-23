type ChaiOrder = {
    type: string;
    sugar: number;
    strong: boolean;
}


function makeChai(order: ChaiOrder) {
    console.log(order)
}

function servechai(order: ChaiOrder) {
    console.log(order)
}

type TeaRecipe = {
    water: number;
    milk: number;
}

class MasalaChai implements TeaRecipe{
    water = 100;
    milk = 50;
}

interface Cupsize {
    size: "small" | "large"
}

class Chai implements Cupsize {
  size:"small" | "large"="large"
}

type TeaType = "masala" | "gimger" | "lemon"


function orderChai(t: TeaType) {
    console.log(t)
}

// intersection

type config = {
     appName: string
    version:number
}

const cfg: config = {
    appName: "Masterji",
    version:3.4
}

cfg.appName ="fif"