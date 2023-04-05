let arr = [1, 2, 3, 4, 5, 6, 66, 666, 23, 232],
  target = 4;

function linearSearch(arr, target) {
  let i = 0;
  while (i < arr.length) {
    if (arr[i] === target) {
      return `Target ${target} is found at index ${i}.`;
    }
    i++;
  }
  return 'Target not found!';
}

console.log(linearSearch(arr, target));
