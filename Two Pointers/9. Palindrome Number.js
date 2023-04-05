var isPalindrome = function (x) {
  let j = x.length - 1;

  console.log(j);
  for (let i = 0; i <= x.length; i++) {
    if (x[i] != x[j]) {
      return false;
    }
    j--;
  }
//   return true;
};
console.log(isPalindrome(10));
