
let asc_arr = [1, 2, 3, 4, 5, 5, 5, 7, 8, 9, 10, 22],
  des_arr = [10, 4, 3, 2, 2, 1];

let arr = asc_arr,
  target = 10;

function binarySearch(arr, target) {

  let start = 0,
    end = arr.length,
    isAscending = arr[start] < arr[end - 1],
    mid;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      return `${target} found at index ${mid}`;
    } else if (mid < target) {
      if (isAscending) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    } else {
      if (isAscending) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }
  return `Target Not found`;
}

console.log(binarySearch(arr, target));


