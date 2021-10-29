/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
// var solve = function(board) {
//   const m = board.length,
//         n = board[0].length;
  
//   for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//       if (i === 0 || i === m - 1 || j === 0 || j === n - 1) {
//         helper(i, j, board);
//       }
//     }
//   }

//   for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//       board[i][j] = board[i][j] === '$' ? 'O' : 'X';
//     }
//   }
  
//   return board;
// };

// var helper = (i, j, board) => {
//   if (board[i][[j]] === 'O') {
//     board[i][j] = '$';
//     if (i > 0 && board[i - 1][j] === 'O') {
//       helper(i - 1, j, board);
//     }
//     if (i < board.length - 1 && board[i + 1][j] === 'O') {
//       helper(i + 1, j, board);
//     }
//     if (j > 0 && board[i][j - 1] === 'O') {
//       helper(i, j - 1, board);
//     }
//     if (j < board[0].length - 1 && board[i][j + 1] === 'O') {
//       helper(i, j + 1, board);
//     }
//   }
// }

var solve = function(board) {
  const m = board.length,
        n = board[0].length;
  let stack = [];
  
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if ((i === 0 || i === m - 1 || j === 0 || j === n - 1) && board[i][j] === 'O') {
        stack.push([i, j]);
      }
    }
  }
  
  while (stack.length) {
    // No difference use stack or queue;
    let [x, y] = stack.pop();
    board[x][y] = '$';
    
    if (x > 0 && board[x - 1][y] === 'O') {
      stack.push([x - 1, y]);
    }
    if (x < board.length - 1 && board[x + 1][y] === 'O') {
      stack.push([x + 1, y]);
    }
    if (y > 0 && board[x][y - 1] === 'O') {
      stack.push([x, y - 1]);
    }
    if (y < board[0].length - 1 && board[x][y + 1] === 'O') {
      stack.push([x, y + 1]);
    }
  }

  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      board[i][j] = board[i][j] === '$' ? 'O' : 'X';
    }
  }
  
  return board;
}