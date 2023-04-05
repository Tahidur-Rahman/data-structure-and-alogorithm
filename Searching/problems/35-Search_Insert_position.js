var searchInsert = function (nums, target) {
  let start = 0,
    end = nums.length - 1,
    mid = Math.floor((start + end) / 2);
  while (start < end) {
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid;
    }
    mid = Math.floor((start + end) / 2);
  }

  return nums[mid] < target ? mid + 1 : mid;
};
console.log(searchInsert([1, 3, 5, 6], 7));
