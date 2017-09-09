/** Blake Grayson Kehler
 *  2017/10/07
 * 
 *  Challenge:
 *  Given a dollar number, output the written value.
 *  1234.25 => One thousand, two hundred thirty four and twenty five cents
 * 
 *  ** Program has an obscene misuse of ternary operators **
 */

const words = {
  1 : "one",
  2 : "two",
  3 : "three",
  4 : "four",
  5 : "five",
  6 : "six",
  7 : "seven",
  8 : "eight",
  9 : "nine",
  10 : "ten",
  11 : "eleven",
  12 : "twelve",
  13 : "thirteen",
  14 : "fourteen",
  15 : "fifteen",
  16 : "sixteen",
  17 : "seventeen",
  18 : "eighteen",
  19 : "nineteen",
  20 : "twenty",
  30 : "thirty",
  40 : "forty",
  50 : "fifty",
  60 : "sixty",
  70 : "seventy",
  80 : "eighty",
  90 : "ninety",
  "h" : "hundred",
  "t" : "thousand",
  "m" : "million",
  "b" : "billion",
  "tr" : "trillion",
  "q" : "quadrillion",
  "p" : "pentillion"
};

function checkWriter (input){
  console.log(input);
  var output = "";
  let num = input.toString();
  let index = Math.abs(num.indexOf('.'));
  let amount = [padNum(num.substring(0,index)), num.substr(index + 1)];
  for (let i = 0; i < amount[0].length; i++){
    output += hundreds(amount[0][i]);
    let pos = Math.abs(i-amount[0].length +1);
    output += pos == 1 ? words["t"] + " " : pos == 2 ? words["m"] + " " : pos == 3 ? words["b"] + " " : pos == 4 ? words["tr"] : "dollars";
  }
  output += amount[1] != "" ? " and " + hundreds(0 + amount[1]) + "cents." : " and zero cents.";
  return output;
}

function padNum(dol){
  var arr = [];
  dol = dol.length % 3 != 0 ? '0'.repeat(Math.abs(dol.length % 3 - 3)) + dol : dol;
  for (let i = 0; i < dol.length; i+=3){
    arr.push(dol.substr(i, 3));
  }
  return arr;
}

function hundreds(num){
  var output = "";
  output += num.charAt(0) != 0 ? words[num.charAt(0)] + " " +  words["h"] + " " : "";
  output += num.charAt(1) != 0 && num.charAt(2) != 0 ? num.charAt(1) != 1 ? words[num.charAt(1) + 0] + "-" + words[num.charAt(2)]  + " "
                                : words[num.charAt(1) + num.charAt(2)] + " "  : "";
  output += num.charAt(1) == 0 && num.charAt(2) != 0 ? words[num.charAt(2)] + " " : "";
  return output;
}
console.log(checkWriter(333.88));
console.log(checkWriter(742388.15));
console.log(checkWriter(919616.12));
console.log(checkWriter(12.11));
console.log(checkWriter(2.00));
console.log(checkWriter(999.99));
console.log(checkWriter(321537234237.56));