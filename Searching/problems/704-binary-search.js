

let arr = [-1,0,3,5,9,12], target = 9

function binarySearch(arr, target) {

  let start = 0,
    end = arr.length,
    mid;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    console.log(mid)
    if (arr[mid] === target) {
      return mid
    } else if (arr[mid] < target) {
        start = mid + 1;
    
    } else {
        end = mid - 1;
      
    }
  }
  return -1;
}

console.log(binarySearch(arr, target));