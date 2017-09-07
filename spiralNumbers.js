/** Blake Grayson Kehler
 *  2017/10/06
 * 
 *  Challenge:
 *  Given a number output a square spiraling inwards
 *  with sides and height the size of the number given.
 */

function spiralNumbers (n){
  var len = (n*n).toString().length;
  var x = 0, y = 0, side = 1;
  var board = new Array(n).fill(0).map(num => new Array(n).fill(0)); //Create board filled with zeros
  board [0][0] = 1 != len ? ' '.repeat(len - 1) + 1 : 1; //insert 1
  var UP, DOWN, LEFT, RIGHT = true;
  for (let i = 2; i <= n*n; i++){
    if (RIGHT == true){
      x++;
      if (x == n - 1 || board[y][x+1] != 0){
        RIGHT = false;
        DOWN = true;
      }
    }
    else if (DOWN == true){
      y++;
      if (y == n - 1 || board[y+1][x] != 0){
        DOWN = false;
        LEFT = true;
      }
    }
    else if (LEFT == true){
      x--;
      if (x == 0 || board[y][x-1] != 0){
        LEFT = false;
        UP = true;
      }
    }
    else if (UP == true){
      y--;
      if (y == 0 || board[y-1][x] != 0){
        UP = false;
        RIGHT = true;
      }
    }
    let str = i.toString().length != len ? ' '.repeat(len - i.toString().length) + i : i + "";
    board[y][x] = str;
  }

  var printboard = "";
  var row = 0, col = 0;
  for (let i = 0; i < n*n; i++){
    printboard += board[row][col] + " ";
    col++;
    if (col == n){
      row++;
      col = 0;
      printboard+="\n";
    }
  }
  return printboard;
}
console.log(spiralNumbers(2));
console.log(spiralNumbers(4));
console.log(spiralNumbers(10));
console.log(spiralNumbers(15));