// Chess Board Cell Color

// Given two cells on the standard chess board, determine whether they have the same color or not.

function chessBoardCellColor(cell1, cell2) {
    return(cellColor(cell1) === cellColor(cell2));
    
    
  }

function cellColor(cell){
    if((cell[0] === "A" ||cell[0] === "C" ||cell[0] === "E" ||cell[0] === "G") && (cell[1] === "1" || cell[1]==="3" ||cell[1]=== "5" || cell[1]==="7")){
            return "brown"
        } 
    if((cell[0] === "B" || cell[0] ==="D" || cell[0] ==="F" || cell[0] ==="H") && (cell[1] === "2" ||cell[1]=== "4" ||cell[1]=== "6" || cell[1]==="8")){
            return "brown"
        } 
   return "tan"
}


 //console.log(chessBoardCellColor("A1","C3"))  //,true)

//console.log(chessBoardCellColor("A1","H3"))  //,false)
//console.log(chessBoardCellColor("A1","A2"))  //,false)




// Define a function that takes in two non-negative integers aaa and bbb and returns the last decimal digit of a^b 

var lastDigit = function(str1, str2){ 
    let lastDigit
    if(str1 === '0' && str2 === '0'){
        lastDigit = 1
        return lastDigit
    }
    let product = parseInt(str1) ** parseInt(str2);
    let numArray = product.toString().split('')
        lastDigit = Number(numArray[numArray.length-1])

    return lastDigit;
}



lastDigit("4", "1")            // returns 4
lastDigit("4", "2")            // returns 6
lastDigit("9", "7")            // returns 9    
lastDigit("10","10000000000")  // returns 0
lastDigit("0", "0")