const rs = require("readline-sync");


let deck = [
    "2H", "3H", "4H", "5H", "6H", "7H", "8H", "9H", "10H", "JH", "QH", "KH", "AH",
    "2C", "3C", "4C", "5C", "6C", "7C", "8C", "9C", "10C", "JC", "QC", "KC", "AC",
    "2D", "3D", "4D", "5D", "6D", "7D", "8D", "9D", "10D", "JD", "QD", "KD", "AD",
    "2S", "3S", "4S", "5S", "6S", "7S", "8S", "9S", "10S", "JS", "QS", "KS", "AS"
]

let newDeck = [
    "2H", "3H", "4H", "5H", "6H", "7H", "8H", "9H", "10H", "JH", "QH", "KH", "AH",
    "2C", "3C", "4C", "5C", "6C", "7C", "8C", "9C", "10C", "JC", "QC", "KC", "AC",
    "2D", "3D", "4D", "5D", "6D", "7D", "8D", "9D", "10D", "JD", "QD", "KD", "AD",
    "2S", "3S", "4S", "5S", "6S", "7S", "8S", "9S", "10S", "JS", "QS", "KS", "AS"
]

let playerCard1 = ''
let playerCard2 = ''
let dealerCard1 = ''
let dealerCard2 = ''
let playerCard1Value = 0
let playerCard2Value = 0
let dealerCard1Value = 0
let dealerCard2Value = 0
let playerCardTotal = 0
let dealerCardTotal = 0


const blackJack = () => {
    deal()
}

const deal = () => {

    playerCard1 = deck[Math.floor(Math.random() * (deck.length + 1))];
    dealerCard1 = deck[Math.floor(Math.random() * (deck.length + 1))]
    playerCard2 = deck[Math.floor(Math.random() * (deck.length + 1))];
    dealerCard2 = deck[Math.floor(Math.random() * (deck.length + 1))]
      
    deck.splice(deck.indexOf(playerCard1), 1)
    deck.splice(deck.indexOf(dealerCard1), 1)
    deck.splice(deck.indexOf(playerCard2), 1)
    deck.splice(deck.indexOf(dealerCard2), 1)
    console.log(deck);

    playerCard1Value = computeValue(playerCard1);
    dealerCard1Value = computeValue(dealerCard1)
    playerCard2Value = computeValue(playerCard2)
    dealerCard2Value = computeValue(dealerCard2)

  
   playerCardTotal = playerCard1Value + playerCard2Value
   dealerCardTotal = dealerCard1Value + dealerCard2Value
    
    console.log(playerCard1Value, playerCard2Value, dealerCard1Value, dealerCard2Value);
    if(playerCardTotal === 21){
        twentyOne(playerCard1, playerCard2)
    }

    let dealHitStand = rs.question(`You have been dealt a *${playerCard1}* and a *${playerCard2}*. Your Total = ${playerCardTotal}. The dealer is showing a *${dealerCard1}*, (Value of ${dealerCard1Value}). Do you want to (H)IT or (S)TAND? `);
    dealHitStand === 'H' ? playerHit(dealerCard1, dealerCard1Value) : dealHitStand === 'S' ? playerStand() : null
    
}




const computeValue = (card) => {
    let cardValue;
    if(card.startsWith('10')){
        return cardValue = 10
    }

    if(card[0] === "J"){
        cardValue = 10
    }  else if(card[0] === "Q"){
        cardValue = 10  
     }  else if(card[0] === "K"){
        cardValue = 10
     }  
     else if(card[0] === "A"){
        cardValue = 11
     
    }    
    else {
        cardValue = Number(card[0])
    }
// console.log(card[0], cardValue);
    return cardValue
}

const twentyOne = (card1, card2) => {
    if(!card2){
       console.log(`You hit and were dealt a ${card1} and have BlackJack!! Congrats. You Win!!!`); 
    } else {
        console.log(`You were dealt a ${card1} and a ${card2} which is 21 and BlackJack!! Congrats. You Win!!!`);
    }
    
    let youWin = rs.keyInYN(`Do you want to play again?`);
 if(youWin){
     deck = [...newDeck]
     console.log(deck.length);
     blackJack()
 } else {
     console.log("Thanks for playing. Come back soon!!!");
     return
 }
}


const playerHit = (showCard, showCardValue ) => {
console.log('Player Hits');
let hitCard = deck[Math.floor(Math.random() * (deck.length + 1))];
deck.splice(deck.indexOf(hitCard), 1)
let hitCardValue = computeValue(hitCard);
playerCardTotal += hitCardValue
playerCardTotal === 21 ? twentyOne(hitCard) : null
playerCardTotal > 21 ? playerBusted(hitCardValue) : null
let hitStand = rs.question(`You hit and were dealt a ${hitCard}. Your total is now ${playerCardTotal}. The dealer is showing a *${showCard}*, (Value of ${showCardValue}). Do you want to (H)IT or (S)TAND? `)
hitStand === "H" ? playerHit() : hitStand === "S" ? playerStand() : null
}




const playerStand = () => {
console.log(`Player Stands with ${playerCardTotal}`);
console.log(`Dealer was dealt a ${dealerCard1} and a ${dealerCard2} for a total of ${dealerCardTotal}` );
while(dealerCardTotal < 17){
    dealerHit()
}
if(dealerCardTotal > 21){
    dealerBusted()
} else {
    compareTotals()
}
}

const playerBusted = (card) => {
console.log(`You were dealt a ${card} so your total is now ${playerCardTotal} and you busted. Sorry. You lose!!! The dealer's total was ${dealerCardTotal}.`);
 let youLose = rs.keyInYN(`Do you want to play again?`);
 if(youLose){
     deck = [...newDeck]
     console.log(deck.length);
     blackJack()
 } else {
     console.log("Thanks for playing. Come back soon!!!");
     return
 }
}

const dealerBusted = () => {
    console.log(`The dealer's total was ${dealerCardTotal} and he Busted. Your total was ${playerCardTotal}. Congrats. You Win!!!`);
     let youLose = rs.keyInYN(`Do you want to play again?`);
     if(youLose){
         deck = [...newDeck]
         console.log(deck.length);
         blackJack()
     } else {
         console.log("Thanks for playing. Come back soon!!!");
        
     }
    }

const dealerHit = () => {
    let dealerHitCard = deck[Math.floor(Math.random() * (deck.length + 1))];
    deck.splice(deck.indexOf(dealerHitCard), 1)
    let dealerHitCardValue = computeValue(dealerHitCard);
    dealerCardTotal += dealerHitCardValue
    console.log(`The dealer HIT and was dealt a ${dealerHitCard}. His total is now ${dealerCardTotal}`);
}

const compareTotals = () => {
    if(playerCardTotal > dealerCardTotal) {
    console.log(`Your total is ${playerCardTotal} and the dealer's total is only ${dealerCardTotal}. Congrats. You win!!!`) 
} else {
    console.log(`The dealer's total is ${dealerCardTotal} but you only have ${playerCardTotal}. Sorry. You lose!!`);
}
let youLose = rs.keyInYN(`Do you want to play again?`);
if(youLose){
    deck = [...newDeck]
    console.log(deck.length);
    blackJack()
} else {
    console.log("Thanks for playing. Come back soon!!!");
    return
}
}

blackJack()




