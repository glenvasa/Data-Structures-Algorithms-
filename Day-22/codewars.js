// "Imagine I have between m and n Zloty..." (or did he say Quetzal? I can't remember!)
// "If I were to buy 9 cars costing c each, I'd only have 1 Zloty (or was it Meticals?) left."
// "And if I were to buy 7 boats at b each, I'd only have 2 Ringglets (or was it Zloty?) left."
// Could you tell me in each possible case:

// how much money f he could possibly have ?
// the cost c of a car?
// the cost b of a boat?


const howmuch = (m, n) => {
let c;
let b;
let start;
let end;
let answer = []
    if(m < n){
        start = m;
        end = n
    } else {
        start = n;
        end = m
    }

    for(let i = start; i <= end; i++){
        c = (i - 1) / 9
        b = (i - 2) / 7
        if(c - Math.floor(c) === 0 && b - Math.floor(b) === 0){
            answer.push([`M: ${i}`, `B: ${b}`, `C: ${c}`]);
        }
    }
   return answer 
}





//console.log(howmuch(1, 100))     // => [["M: 37", "B: 5", "C: 4"], ["M: 100", "B: 14", "C: 11"]]
//console.log(howmuch(1000, 1100)) // => [["M: 1045", "B: 149", "C: 116"]]
//console.log(howmuch(10000, 9950)) //=> [["M: 9991", "B: 1427", "C: 1110"]]
//console.log(howmuch(0, 200))    //  => [["M: 37", "B: 5", "C: 4"], ["M: 100", "B: 14", "C: 11"], ["M: 163", "B: 23", "C: 18"]]


// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.


function cleanString(s) {
    let sArray = s.split('')
    if(s === ''){return ''}
    let hash = /#/g
    console.log((s.indexOf(hash)))


        
	
return sArray
        
    }






// Examples
console.log(cleanString("abc#d##c"))  //      ==>  "ac"
// console.log(cleanString("abc##d######")) //  ==>  ""
// console.log(cleanString("#######")) //       ==>  ""
// console.log(cleanString(""))           //  ==>  ""