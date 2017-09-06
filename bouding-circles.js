var top = [], bottom = [], left = [], right = [];
function circles(x, y, rad){
  top.push(y+rad);
  bottom.push(y-rad);
  left.push(x-rad);
  right.push(x+rad);
}

circles(1,1,2);
circles(2,2,0.5);
circles(-1,-3,2);
circles(5,2,1);

var topMost = Math.max(...top), bottomMost = Math.min(...bottom);
var leftMost = Math.min(...left), rightMost = Math.max(...right);

console.log("(" + leftMost + ", " + bottomMost + "), (" + leftMost + ", " + topMost + "), (" + rightMost + ", " + topMost + "), (" + rightMost + ", " + bottomMost + ")");