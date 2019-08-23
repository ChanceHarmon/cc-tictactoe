'use strict'

let counterX = 0 - 2;
let counterO = 0 - 2;
let counterDraw = 0 - 2;

let ticTacToe = [
  ['x', 'x', 'o'],
  ['x', 'o', 'o'],
  ['x', 'o', 'x']
];

for (let i = 0; i < ticTacToe.length; i++) {
  for (let j = 0; j < ticTacToe[i].length; j++);


  if (ticTacToe[0][0] && ticTacToe[0][1] && ticTacToe[0][2] || ticTacToe[1][0] && ticTacToe[1][1] && ticTacToe[1][2] || ticTacToe[2][0] && ticTacToe[2][1] && ticTacToe[2][2] || ticTacToe[0][0] && ticTacToe[1][0] && ticTacToe[2][0] || ticTacToe[0][1] && ticTacToe[1][1] && ticTacToe[2][1] || ticTacToe[0][2] && ticTacToe[1][2] && ticTacToe[2][2] || ticTacToe[0][0] && ticTacToe[1][1] && ticTacToe[2][2] || ticTacToe[0][2] && ticTacToe[1][1] && ticTacToe[2][0] === 'x') {
    counterX++
  };

  if (ticTacToe[0][0] && ticTacToe[0][1] && ticTacToe[0][2] || ticTacToe[1][0] && ticTacToe[1][1] && ticTacToe[1][2] || ticTacToe[2][0] && ticTacToe[2][1] && ticTacToe[2][2] || ticTacToe[0][0] && ticTacToe[1][0] && ticTacToe[2][0] || ticTacToe[0][1] && ticTacToe[1][1] && ticTacToe[2][1] || ticTacToe[0][2] && ticTacToe[1][2] && ticTacToe[2][2] || ticTacToe[0][0] && ticTacToe[1][1] && ticTacToe[2][2] || ticTacToe[0][2] && ticTacToe[1][1] && ticTacToe[2][0] === 'y') {
    counterY++
  }

  else {
    counterDraw++
  }
}
console.log(counterX);
console.log(counterO);
console.log(counterDraw)