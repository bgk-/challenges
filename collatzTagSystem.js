/** Blake Grayson Kehler
 *  2017/09/09
 * 
 *  Challenge:
 *  Print out Collatz 2-tag sequece 
 * (https://en.wikipedia.org/wiki/Tag_system#Example:_Computation_of_Collatz_sequences) 
 */

const rules = {
  "a" : "bc",
  "b" : "a",
  "c" : "aaa",
};

function collatzTag(n){
  var start = "";
  for (let i = 0; i < n; i++){
    start+="a";
  }
  console.log(start);
  return step(start);
}

function step(seq){
  var lett = seq.charAt(0);
  if (seq.length > 1){
    let next = seq.substr(2) + rules[lett];
    console.log(next);
    step(next);
  }
  return;
}
collatzTag(3);
collatzTag(7);