var peakIndexInMountainArray = function (nums) {
    let start = 0,
      end = nums.length - 1,
      mid = Math.floor((start + end) / 2);
    while (start <= end) {
      if ((nums[mid] > nums[mid-1]) && (nums[mid] > nums[mid+1])) {
        return mid;
      } else if (nums[mid] < nums[mid+1]) {
        start = mid + 1;
      } else {
        end = mid-1;
      }
      mid = Math.floor((start + end) / 2);
    }
  
    return (nums[0]>nums[1]||nums.length==1)?0:1;
  };
  console.log(peakIndexInMountainArray([1,2,3]));
  