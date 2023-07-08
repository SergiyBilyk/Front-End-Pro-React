export const calcTotalPrice = (products) => {
    return products.reduce((sum, obj) => obj.price * obj.amount + sum, 0)
}

export const calcTotalAmount = (products) => {
    return products.reduce((sum, obj) => obj.amount + sum, 0)
}