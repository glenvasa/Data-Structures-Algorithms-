// Day 22 Mission: The Necklace

const same_necklace = (str1, str2) => {
    let startofWord;
    let endofWord;
    if(str1 === str2){
        return (`Yes. "${str1}" and "${str2}" are the same necklace`)
    } 
    
    for(let i = 0; i < str2.length; i++){
        if(str2[i] === str1[0]){
            startofWord = str2.slice(i, str2.length)
            endofWord = str2.slice(0, i)
            if(startofWord + endofWord === str1){
                return  (`Yes. "${str1}" and "${str2}" are the same necklace`)
            }
        }  
    }
    return (`No. "${str1}" and "${str2}" are not the same necklace`)
}

console.log(same_necklace('nicole', 'icolen')) //=> true 
console.log(same_necklace('nicole', 'lenico')) //=> true 
console.log(same_necklace('nicole', 'coneli')) //=> false 
console.log(same_necklace("aabaaaaabaab", "aabaabaabaaa"))// => true 
console.log(same_necklace("abc", "cba")) //=> false 
console.log(same_necklace("xxyyy", "xxxyy")) // => false 
console.log(same_necklace("xyxxz", "xxyxz"))// => false 
console.log(same_necklace("x", "x"))// => true 
console.log(same_necklace("x", "xx"))// => false 
console.log(same_necklace("x", ""))// => false 
console.log(same_necklace("", "")) //=> true