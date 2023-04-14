function quickSort(arr) {
  // Base line - when function close
  if (arr.length < 2) {
    return arr;
  }
  //  Choosing first element as pivot point
  let pivot = arr[0];

  let leftArr = [],
  rightArr = [];
  // Partitioning the array into left and right
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }
//  revise this sorting into the divided arrays until single(sorted) element are found and merge all parts 
  return [...quickSort(leftArr),pivot,...quickSort(rightArr)]
}

console.log(quickSort([-3, 30, 0, 20, 2, -2, 10,]));
