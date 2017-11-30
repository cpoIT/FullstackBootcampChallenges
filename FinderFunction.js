var numbers = [1, 3, 5, 64, 7, 12];
var odds = [9, 13, 15, 17];

var isEven = function(num) { 
  return !(num % 2); 
};

function finderFunction(anArray, testFunction) {
  for (var i = 0; i < anArray.length; i++) {
    if (testFunction(anArray[i]) === true) {
      return anArray.indexOf(anArray[i])
    } else {
    } 
  }
      return anArray.indexOf()
}

finderFunction(numbers, isEven);
