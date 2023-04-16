function powerOfTwo(n) {
  if (n < 1) return false;
  while (n > 1) {
    if (n % 2 != 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}

console.log(powerOfTwo(0));
console.log(powerOfTwo(1));
console.log(powerOfTwo(20));
console.log(powerOfTwo(16));
console.log(powerOfTwo(50));
console.log(powerOfTwo(64));

// BIG O  - O(logn)
