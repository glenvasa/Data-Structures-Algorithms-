// Day 5: Mission Part 1

// Build a simple calculator to determine if you can purchase an item at a store

let balances = [390, 20, 400, 300, 20, 100, 75, 140, 217, .75]
itemPrices = [40, .40, 399.75, 37.50, 14.24, 100.99, 222.12, 74.55, 29.40, 575.99]

const checkBalance = (bal, items) => {
    for (let i = 0; i < bal.length; i++) {
        for (let j = 0; j < items.length; j++) {
            bal[i] >= items[j] 
            ? console.log(`With a balance of $${bal[i].toFixed(2)} you can purchase Item #${j + 1} for $${items[j].toFixed(2)}. 
                            Your new balance is $${(bal[i] - items[j]).toFixed(2)}.`) 
            : console.log(`With a balance of $${bal[i].toFixed(2)} you are broke and cannot afford Item #${j + 1} that costs $${items[j].toFixed(2)}. 
                            You need an additional $${(items[j] - bal[i]).toFixed(2)} to purchase it.`)
        }
    }
}

checkBalance(balances, itemPrices)


// Day 5: Mission Part 2

// Create an algorithm tha converts kilograms to pounds
// pounds = kilograms * 2.205

const convertKilogramsToPounds = (kg) => {
    console.log(`${kg} kilograms is the equivalent of ${kg * 2.205} pounds.`)
}

convertKilogramsToPounds(17)
