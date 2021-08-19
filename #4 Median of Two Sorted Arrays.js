/**
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).
*/

var findMedianSortedArrays = function(nums1, nums2) {
  const m = nums1.length, n = nums2.length;
  const left = Math.floor((m + n + 1) / 2), right = Math.floor((m + n + 2) / 2);

  return (findKth(nums1, 0, nums2, 0, left) + findKth(nums1, 0, nums2, 0, right)) / 2;
};

const findKth = (nums1, i, nums2, j, k) => {
  if (i >= nums1.length) return nums2[j + k - 1];
  if (j >= nums2.length) return nums1[i + k - 1];
  if (k == 1) return Math.min(nums1[i], nums2[j]);
  
  let midVal1 = (i + k / 2 - 1) < nums1.length ? nums1[i + Math.floor(k / 2) - 1] : Number.MAX_VALUE;
  let midVal2 = (j + k / 2 - 1) < nums2.length ? nums2[j + Math.floor(k / 2) - 1] : Number.MAX_VALUE;
  
  let intK = Math.floor(k / 2);
  
  return midVal1 < midVal2 ? findKth(nums1, i + intK, nums2, j, k - intK) : findKth(nums1, i, nums2, j + intK, k - intK);
}