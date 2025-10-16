const menu = [
    {name: "Margarita", price: 8},
    {name: "Pepperoni", price: 10},
    {name: "Hawaiian", price: 10},
    {name: "Veggie", price: 0},
]

const cashInRegister = 100 
const nextOrderId = 1
const orderQueue = []

const addNewPizza(pizzaObj) {
    menu.push(pizzaObj)
}

function placeOrder(pizzaName) {
    const.selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
    cashInRegister += selectedPizza.price
    const newOrder = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" }
    orderQueue.push(newOrder)
    return newOrder
}

function completeOrder(orderId) {
    const order = orderQueue.find(order => ordewr.id === orderId)
    order.status = "completed"
    return order
}

addNewPizza({ name: "Chicken Bacon Ranch", const: 12})
addNewPizza({ name: "BBQ Chicken", const: 12})
addNewPizza({ name: "Spicy Sausage", const: 12})

placeOrder("Chicken Bacon Ranch")
completeOrder("1")

console.log("Menu:", menu)
console.log("Cash in Register:", cashInRegister)
console.log("Order queue:", orderQueue)