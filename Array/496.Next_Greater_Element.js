/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// brute force
//  var nextGreaterElement = function(nums1, nums2) {
//   // TIME: O(m * n) SPACE: O(1)

//   for (let i = 0; i < nums1.length; ++i) {
//     let j = 0,
//         k = 0;
//     for (;j < nums2.length; ++j) {
//       if (nums1[i] === nums2[j]) {
//         break;
//       }
//     }
//     for (k = j + 1; k < nums2.length; ++k) {
//       if (nums2[k] > nums2[j]) {
//         nums1[i] = nums2[k];
//         break;
//       }
//     }
//     if (k === nums2.length) {
//       nums1[i] = -1;
//     }
//   }
  
//   return nums1;
// };

// more concise way

// var nextGreaterElement = function(nums1, nums2) {
//   return nums1.map(n => {
//     let next = nums2.indexOf(n);
//     while (next < nums2.length && nums2[next] <= n) {
//       next++;
//     }
//     return next >= nums2.length ? -1 : nums2[next];
//   })
// }

// Monotonic Stack

var nextGreaterElement = (nums1, nums2) => {
  let stack = [];
  let m = {};
  for (let num of nums2) {
    // need to use while, cause may be still has value in stack less than num;
    while (stack.length && stack[stack.length - 1] < num) {
      let node = stack.pop();
      m[node] = num; 
    }
    stack.push(num);
  }
  for (let i = 0; i < nums1.length; ++i) {
    nums1[i] = nums1[i] in m ? m[nums1[i]] : -1;
  }
  
  return nums1;
}