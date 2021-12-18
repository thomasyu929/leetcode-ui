/**
 * @param {character[][]} board
 * @return {number}
 */

// https://leetcode-cn.com/problems/battleships-in-a-board/

var countBattleships = function(board) {
  let m = board.length, n = board[0].length;
  let res = 0;
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (i > 0 && board[i-1][j] === 'X') {
        continue;
      }
      else if (j > 0 && board[i][j-1] === 'X') {
        continue;
      }
      res += board[i][j] === 'X';
    }
  }

  return res;
};