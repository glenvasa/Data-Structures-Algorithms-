// Day 5: Advanced Mission

// Given r for radius, write an algorithm to determine the area of a circle

let radiusArray = [ 6, 7, 15, 128]
let i = 0

let circleArea = (radiusValues) => {
    while ( i < radiusValues.length ) {
        let area = Math.PI * (radiusValues[i] ** 2)
        console.log(`The area of a circle with radius ${radiusValues[i]} is ${area}`)
        i++
    }
}

circleArea(radiusArray)