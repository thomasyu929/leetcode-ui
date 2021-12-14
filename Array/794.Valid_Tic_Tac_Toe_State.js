/**
 * @param {string[]} board
 * @return {boolean}
 */

// https://leetcode-cn.com/problems/valid-tic-tac-toe-state/

var validTicTacToe = function(board) {
  let m = board.length, n = board[0].length;
  let turns = 0, diag = 0, antidiag = 0;
  let rows = new Array(3).fill(0);
  let cols = new Array(3).fill(0);
  let xwins = false, owins = false;

  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (board[i][j] === 'X') {
        turns++;
        rows[i]++, cols[j]++;
        if (i === j) {
          diag++
        }
        if (i+j === 2) {
          antidiag++;
        }
      }
      else if (board[i][j] === 'O') {
        turns--;
        rows[i]--, cols[j]--;
        if (i === j) {
          diag--;
        }
        if (i+j === 2) {
          antidiag--;
        }
      }
    }
  }

  xwins = rows[0] === 3 || rows[1] === 3 || rows[2] === 3 ||
          cols[0] === 3 || cols[1] === 3 || cols[2] === 3 ||
          diag === 3 || antidiag === 3;

  owins = rows[0] === -3 || rows[1] === -3 || rows[2] === -3 ||
          cols[0] === -3 || cols[1] === -3 || cols[2] === -3 ||
          diag === -3 || antidiag === -3;
  if (xwins && turns === 0 || owins && turns === 1) {
    return false;
  }

  return (turns === 0 || turns === 1) && (!owins || !xwins);
};