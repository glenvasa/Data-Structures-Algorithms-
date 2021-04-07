// Day 3

// Part 1: Truncate

// Truncate 'Welcome' to 'Welc'
const str1 = 'Welcome'
const str2 = str1.slice(0, 4)
// console.log(str2);

// Truncate 'Hello, World!' to 'Hello,'
const str3 = 'Hello, World!'
const str4 = str3.substr(0, 6)
// console.log(str4)

// Truncate 'Disaster' to 'D'
const str5 = 'Disaster'
const str6 = str5.replace('isaster', '')
// console.log(str6)











// Part 2: Char Builder

var person = 'Mark';
var car = 'Jeep';
var animal = 'Leopard';
var city = 'Townsville';
var game = 'Cards';
var water = 'Flows';
var clean = 'Shower';
var mood = 'Frown'

var meltdown = person[0] + car[1] + (animal[0] + city[0]).toLowerCase() + game[3] + water[2] + clean[3] + mood[4]
console.log(meltdown) 