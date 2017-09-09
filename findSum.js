/** Blake Grayson Kehler
 *  2017/09/04
 * 
 *  Challenge:
 *  Given a sorted array of integers and a number, find if any pair 
 *  of numbers within the array can be summed to obtain the number.
 *  If no possible pair exists output "No sum found".
 */

function findSum (arr, num){
  //Attempting to use object literals, but completely unnecessary.
  var output = {
    found : false,
    low : 0,
    high : arr.length-1,
  };
  for (var i = 0; i < arr.length; i++){
    //Start at the ends of the array, if they sum smaller than the number move the lowest right, if larger move the highest left. 
    arr[output.low] + arr[output.high] < num ? output.low += 1 : output.high -= 1;
    //If the sum of the pairs match or the lowest/highest cross paths, break.
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