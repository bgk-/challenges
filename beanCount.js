function countBs(word){
  var count = 0;
  for (var i = 0; i<word.length; i++){
    if (word.charAt(i)==='B')
      count++;
  }
  return count;
}
function countChar(word, letter){
  var count = 0;
  for (var i = 0; i<word.length; i++){
    if (word.charAt(i)===letter)
      count++;
  }
  return count;
}
console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));