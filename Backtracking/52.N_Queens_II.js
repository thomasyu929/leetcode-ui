/**
 * @param {number} n
 * @return {number}
 */
 var totalNQueens = function(n) {
  let res = [0];
  let queens = new Array(n).fill(-1);
  return helper(0, 0, queens); // number in recursive has two ways: just return recursive functon or use array to include the number;
  // return res[0];
};

var helper = (res, row, queens) => {
  if (row === queens.length) {
    return res + 1;
  }
  for (let col = 0; col < queens.length; col++) {
    if (isValid(row, col, queens)) {
      queens[row] = col;
      res = helper(res, row + 1, queens);
      queens[row] = -1;
    }
  }
  return res;
}

var isValid = (row, col, queens) => {
  for (let i = 0; i < row; i++) {
    if (col === queens[i] || Math.abs(queens[i] - col) === Math.abs(i - row)) {
       return false;
    }
  }
  
  return true;
}