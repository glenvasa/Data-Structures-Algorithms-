var list1 = [
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
  ];

// Add greeting property to each object and return the array
//
//     { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
//       greeting: 'Hi Sofia, what do you like the most about Java?'


function greetDevelopers(list) {
    list.map(item => item.greeting = `Hello ${item.firstName}, what do you like the most about ${item.language}?`)
    return list
  }

// console.log(greetDevelopers(list1));


// it ("should handle small numbers", () => {
//     Test.assertEquals(solution(1), 'I', '1 should, "I"')
//     Test.assertEquals(solution(2), 'II', '2 should, "II"')
//     Test.assertEquals(solution(3), 'III', '3 should, "III"')
//     Test.assertEquals(solution(4), 'IV', '4 should, "IV"')
//     Test.assertEquals(solution(5), 'V', '5 should, "V"')
//     Test.assertEquals(solution(9), 'IX', '9 should, "IX"')
//     Test.assertEquals(solution(10), 'X', '10 should, "X"')
//     Test.assertEquals(solution(11), 'XI')
//     Test.assertEquals(solution(19), 'XIX')
//     Test.assertEquals(solution(22), 'XXII')
//     Test.assertEquals(solution(15), 'XV')
//   });
  
//   it ("should handle large numbers", () => {
//     Test.assertEquals(solution(1000), 'M', '1000 should, "M"')
//     Test.assertEquals(solution(1001), 'MI', '1001 should, "MI"')
//     Test.assertEquals(solution(1990), 'MCMXC', '1990 should, "MCMXC"')
//     Test.assertEquals(solution(2007), 'MMVII', '2007 should, "MMVII"')
//     Test.assertEquals(solution(2008), 'MMVIII', '2008 should, "MMVIII"')

var  roman = {M:1000,CM:900, D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1 }

function solution(number){
    // convert the number to a roman numeral
  var  roman = {M:1000,CM:900, D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1 }
  
  var ans = '';
  while(number>0){
      for(a in roman){ 
          if(roman[a]<=number){ ans += a; number-=roman[a]; break;}
              
      }
  }
  return ans;
  }

  console.log(solution(2008)) // MMVII
  console.log(solution(6)); // VI
  console.log(solution(3876));  // MMMDCCCLXXVI