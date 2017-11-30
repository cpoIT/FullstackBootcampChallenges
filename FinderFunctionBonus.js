function finderFunctionBonus(anArray, testFunction) {
  newArray = [];
  for (var i = 0; i < anArray.length; i++) {
    if (testFunction(anArray[i]) === true) {
      newArray.push(anArray[i])
      result = newArray
    } else {
      result = anArray.indexOf()
    }
  }
    return result
}


finderFunctionBonus(numbers, isEven);
