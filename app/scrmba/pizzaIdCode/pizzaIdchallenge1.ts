type Pizza = {
    id: number
    name: string
    price: number
}

type Order = {
    id: number
    pizza: Pizza
    status: "ordered" | "completed"
}

const menu: Pizza[] = [
    { id: 1, name: "Margherita", price: 8 },
    { id: 2, name: "Pepperoni", price: 10 },
    { id: 3, name: "Hawaiian", price: 10 },
    { id: 4, name: "Veggie", price: 9 },
]

let cashInRegister = 100
let nextOrderId = 1
let nextPizzaId = 1
const orderQueue: Order[] = []


function addNewPizza(pizzaObj: Pizza): void {
    menu.push(pizzaObj)
}

//purpose of file is to understand the messy formated code the professor gave to me in scrimba
//(well maybe not anymore cus i fixed it already)


/**
 * Challenge part 1: Make it so we can use a global variable to track the nextPizzaId
 * and use the same trick we use with `nextOrderId++` when you're calling addNewPizza.
 * Update the menu items to use this as well so we don't have to manually enter ids 1-4
 * like we're currently doing
 */

addNewPizza({ 
    id: 5, 
    name: "Chicken Bacon Ranch", 
    price: 12 
})

addNewPizza({ 
    id: 6, 
    name: "BBQ Chicken", 
    price: 12 
})

addNewPizza({ 
    id: 7, 
    name: "Spicy Sausage", 
    price: 11 
})



function placeOrder(pizzaName: string): Order | undefined {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)//pizzaName seems to be working because if is not catching the !selectedPizza (scrimba console)

    if (!selectedPizza) {                                                   //so if i had to guess .find is just getting the first pizza name and assigned to selectedPizza
        console.error(`${pizzaName} does not exist in the menu`)
        return
    }

    cashInRegister += selectedPizza.price       //cash in register = 100 | slected pizza price = probably 8 cus its prob margherita

    const newOrder: Order = {
        id: nextOrderId++, pizza: selectedPizza, status: "ordered"
    }

    orderQueue.push(newOrder)

    return newOrder                             //return newOrder because its value its not assigned to any variable, so placeOrder will have it.
}                                               //Thats why placeOrder has type of Order (id, pizza, status)

function completeOrder(orderId: number): Order | undefined {
    const order = orderQueue.find(              //last orderQueue will have the last id, pizza, and status in it. this const order will now have the 'id'
        order => order.id === orderId
    )

    if (!order) {
        console.error(`${orderId} was not found in the orderQueue`)
        return
    }

    order.status = "completed"                 //rewrites status from ordered to completed

    return order                               //same thing like previous return newOrder
}

export function getPizzaDetail(identifier: string | number): Pizza | undefined {

    if (typeof identifier === "string") {
        return menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase())        //here in .find this lowercase and === logic looks super weird but
    }                                                                                           //its just the logic to either get the pizza name or pizza id by
                                                                                                //calling getPizzaDetail and parsing the desired pizza want to know abt
    else if (typeof identifier === "number") {
        return menu.find(pizza => pizza.id === identifier)
    }

    else {
        throw new TypeError("Parameter `identifier` must be either a string or a number")
    }
}

console.log("Menu:", menu)

console.log("Cash in register:", cashInRegister)

console.log("Order queue:", orderQueue)


// placeOrder("Chicken Bacon Ranch")
// placeOrder("Pepperoni")
// completeOrder(1)
// placeOrder("Veggie")
// completeOrder(2)
