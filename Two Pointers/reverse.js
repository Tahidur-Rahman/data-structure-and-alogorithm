let arr = [1, 2, 3, 4, 5, 6, 7];

function reverse(arr) {
  let i = 0,
    j = arr.length - 1;
  let temp;
  while (i < j) {
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
  return arr;
}

console.log(reverse(arr));

