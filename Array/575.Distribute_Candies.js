/**
 * @param {number[]} candyType
 * @return {number}
 */

/**
 * Time O(n) Space O(n)
 */

// https://leetcode.com/problems/distribute-candies/

var distributeCandies = function(candyType) {
  // remember to think about set instead of map first every time solve the question which require unique value of array;
  let s = new Set(candyType);
  // for (let candy of candyType) {
  //   s.add(candy);
  // }
  return Math.min(candyType.length / 2, s.size);
};