var twoSum = function (numbers, target) {
  let i = 0,
    j = numbers.length - 1,
    sum;
  numbers = numbers.sort((a, b) => a + b);
  while (i <= j) {
    sum = numbers[i] + numbers[j];
    if (sum == target) {
      return [i, j];
    } else if (sum > target) {
      j--;
    } else {
      i++;
      j++;
    }
  }
};

console.log(twoSum([-1,-2,-3,-4,-5], -8));
