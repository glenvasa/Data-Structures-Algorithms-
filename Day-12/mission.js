// Day 12 Mission Part 1: Objects


const vehicles = { Honda : "Crv", Jeep : "Wrangler", Chrysler : "Pacifica", Ford : "F150" }

const checkKeys = (obj) => {
    for(const key in obj){
        if(key === 'Ford'){
            delete obj.Ford
            return obj
        }
    }
}

// console.log(checkKeys(vehicles));


// Day 12 Mission Part 2: Key Checker

const people = { john: 15, mark: 17, jennifer: 18 }

const exists = Object.keys(people).includes('john')

// console.log(exists);









// Day 12 Mission Part 3: Object to Array.  
// Store all keys (including nested keys) in an array

let students = {   
                  Jon: {     age: 27,     online: false   },   Jack: {     age: 32,     online: true  },   
                  Jenn: {     age: 48,     online: false   },   Liz:  {     age: 19,     online: true  } 
                }; 

const locateKeys = (obj) => {
    let keysArray = []
    for (const [key, value] of Object.entries(obj)){
        keysArray.push(key)
        Object.keys(value).forEach(k => keysArray.push(k))
    }
    return keysArray;
}

console.log(locateKeys(students))