// Day 10 Advanced Mission: The Multiverse

const { resourceLimits } = require("worker_threads")

// Create multidimensional array that holds this matrix
// 1 2 3
// 4 5 6

// Create another multidimensional array that holds this matrix
//  7 8
//  9 10
//  11 12

// Multiply the 2 matrices and store the result in a 3rd matrix (multidimensional array)
// The answer should be
// [[58, 64], [139, 154]]

const array1 = [[1, 2, 3], [4, 5, 6]]
const array2 = [[7, 8], [9, 10], [11, 12]]

// var array3 = [];
// var prod1 = 0

// const multiplyMatrices = (arr1, arr2) => { 
//     let pos1 = (arr1[0][0] * arr2[0][0]) + (arr1[0][1] * arr2[1][0]) + (arr1[0][2] * arr2[2][0])  
//     console.log(pos1);
//     let pos2 = (arr1[0][0] * arr2[0][1]) + (arr1[0][1] * arr2[1][1]) + (arr1[0][2] * arr2[2][1])
//     console.log(pos2);

//     let pos3 = (arr1[1][0] * arr2[0][0]) + (arr1[1][1] * arr2[1][0]) + (arr1[1][2] * arr2[2][0])  
//     console.log(pos3);
//     let pos4 = (arr1[1][0] * arr2[0][1]) + (arr1[1][1] * arr2[1][1]) + (arr1[1][2] * arr2[2][1])
//     console.log(pos4);
//     }
// let pos11 = 0
// let pos12 = 0
// let pos21 = 0
// let pos22 = 0   

// const multiplyMatrices = (arr1, arr2) => {
//     for(let i = 0; i< arr1[0].length; i++){
    
//             pos = arr1[i][i] * arr2[i][i] + arr1[i][i+1] * arr2[i+1][i] + arr1[i][i+2] * arr2[i+2][i]
        
//         }
        
    
// console.log(pos);
// }

// const multiplyMatrices = (arr1, arr2) => {
//     var array3 = new Array(arr1.length)
//     for(var i = 0; i < array3.length; i++){
//         array3[i] = new Array(arr2.length)
//         for(var j = 0; j < arr1.length; j++){
//             array3[i][j] = 0 // array3[i][j] is Nan, force to be zero
//             for(var k = 0; k < arr2.length; k++){
//                 array3[i][j] += arr1[i][k] * arr2[k][j]
//             }

//         }


//     }
//     return array3
// }


function multiplyMatrices(arr1, arr2) {
    var arr3 = [];
    for (var i = 0; i < arr1.length; i++) {
        arr3[i] = [];
        for (var j = 0; j < arr2[0].length; j++) {
            var sum = 0;
            for (var k = 0; k < arr1[0].length; k++) {
                sum += arr1[i][k] * arr2[k][j];
            }
            arr3[i][j] = sum;
        }
    }
    return arr3;
}

console.log(multiplyMatrices(array1, array2))