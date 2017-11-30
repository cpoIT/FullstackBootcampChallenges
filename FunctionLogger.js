var squareNum = function(root) {
  return root*root;
}

var functionLogger = function(aNum, callback) {
  console.log('Function starting');
  result = callback(aNum);
  console.log('Function complete');
  return result;
}

functionLogger(4, squareNum);
