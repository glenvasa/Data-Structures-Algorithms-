// Validate Subsequence

// sequence is subsequence of array b/c the sequence numbers appear in the same order in 
//  the array even though not necessarily ajacent
array = [1, 5, 22, 25, 6, -1, 8, 10]
sequence = [1, 6, -1, 10]

function isValidSubsequence(array, sequence){
    let commonArray = []
    for (var i = 0; i < array.length; i++) {
        if (array[i] === sequence[0]) {
            console.log(i);
            commonArray.push(array[i])
            console.log(commonArray);
            break
        }
    }
    for (var j = array[i]; j < array.length; j++){
        if (array[j] === sequence[1]){
            console.log(j);
            commonArray.push(array[j])
            console.log(commonArray);
            break
        }
    }
}


isValidSubsequence(array, sequence)