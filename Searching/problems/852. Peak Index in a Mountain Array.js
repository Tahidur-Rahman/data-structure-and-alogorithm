var peakIndexInMountainArray = function (arr) {
    let start = 0,
      end = arr.length - 1,
      mid = Math.floor((start + end) / 2);
    while (start <= end) {
      if ((arr[mid] > arr[mid-1]) && (arr[mid] > arr[mid+1])) {
        return mid;
      } else if (arr[mid] < arr[mid+1]) {
        start = mid + 1;
      } else {
        end = mid-1;
      }
      mid = Math.floor((start + end) / 2);
    }
  
    return -1;
  };
  console.log(peakIndexInMountainArray([0,2,1,0]));
  