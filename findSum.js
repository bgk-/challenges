function findSum (arr, num){
  var output = {
    found : false,
    low : 0,
    high : arr.length-1,
  };
  for (var i = 0; i < arr.length; i++){
    arr[output.low] + arr[output.high] < num ? output.low += 1 : output.high -= 1;
    if (arr[output.low] + arr[output.high] == num || output.low > output.high){
      break;
    }
  }
  return arr[output.low] + arr[output.high] == num ? (output.found = true, "index " + output.low + "," + output.high + ": numbers " + arr[output.low] + "," + arr[output.high]) 
  : "No sum found";
}

console.log(findSum([1, 2, 3, 9], 8));
console.log(findSum([1, 2, 4, 4], 8));
console.log(findSum([-1, 2, 4, 7, 22, 33, 90, 120], 21));