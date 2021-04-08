// Day 4 Mission - Part 1

const eggs = 6.5
apples = 11
steak = 20
milk = 10
chicken = 16
pizza = 15

const cart = eggs + apples + steak + milk + chicken + pizza
const coupon = .25
const priceAfterDiscount = cart * (1 - coupon)
const taxes = priceAfterDiscount * .0775
const finalPrice = priceAfterDiscount + taxes


// Part 2

const rectangleArea = (int1, int2) => {
    const area = int1 * int2
    console.log(`The area of a rectangle having a length of ${int1} and a width of ${int2} is ${area}`)
}

rectangleArea(4, 5)
