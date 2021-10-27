/**
 * @param {number} n
 * @return {string[][]}
 */
 let res;

 var solveNQueens = function(n) {
   res = [];
   let queens = new Array(n).fill().map(() => new Array(n).fill('.'));
   helper(0, queens);
   return res;
 };
 
 var helper = (row, queens) => {
   if (row === queens.length) {
     res.push([...queens.map(arr => arr.join(''))]);
     return;
   }
   for (let i = 0; i < queens.length; i++) {
     if (isValid(row, i, queens)) {
       queens[row][i] = 'Q';
       helper(row + 1, queens);
       queens[row][i] = '.';
     }
   }
 }
 
 var isValid = (row, col, queens) => {
   for (let i = 0; i < row; i++) {
     if (queens[i][col] === 'Q') {
       return false;
     }
   }
   
   for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
     if (queens[i][j] === 'Q') {
       return false;
     }
   }
   
   for (let i = row - 1, j = col + 1; i >= 0 && j < queens.length; i--, j++) {
     if (queens[i][j] === 'Q') {
       return false;
     }
   }
   
   return true;
 }