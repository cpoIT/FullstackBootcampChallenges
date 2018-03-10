function isEven (num) {
  return num % 2 === 0 ? true: false ;
 }
 
 numbers = [1, 2, 3];
 
 function finderFunctionBonus(anArray, testFunction) {
   newArray = [];
   for (let i = 0; i < anArray.length; i++) {
     if (testFunction(anArray[i]) === true) {
       newArray.push(anArray[i])
     }
   }
     return newArray.length > 0 ? newArray: -1;
 }
 
finderFunctionBonus(numbers, isEven);
