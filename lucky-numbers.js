function lucky(n){
  //create array of only odd numbers
  var arr = new Array(Math.floor(n/2+Math.sqrt(n))).fill().map((e,i)=>(i+1)*2-1);
  //filter out each index element by the next value after each iteration
  for (var i = 1; i < arr.length; i++){
    arr = arr.filter(function (value, index) {
    return (index + 1) % arr[i] != 0;
    });
  }
  //figure out the index of the closest next value
  var close = closest(arr, n);
  return (arr[close] != n) ? arr[close-1] + " < " + n + " < " + arr[close] : n + " is a lucky number.";
}
function closest(arr, n){
  return arr.findIndex(function(num){
    return num >= n;
  });
}
console.log(lucky(103));
console.log(lucky(225));
console.log(lucky(997));