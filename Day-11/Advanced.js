// Day 11 Advanced Mission: Un-Multiple

// Write a function that returns the total count of integers that are not multiples 
// of either 6 or 15 between a range of 1 and 200

(() => {
    let notMultiple = 0;
    for(let i = 1; i <= 200; i++){
        (i % 6 !== 0) && (i % 15 !== 0) ? notMultiple += 1 : null
    }
    return console.log(notMultiple)
})()