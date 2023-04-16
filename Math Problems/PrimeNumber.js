function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(0));
console.log(isPrime(2));
console.log(isPrime(5));
console.log(isPrime(9));

// BIG O  - O(n)

function isPrimeOptimal(n) {
    if (n < 2) return false;
    for (let i = 2; i < Math.sqrt(n); i++) {
      if (n % i == 0) {
        return false;
      }
    }
    return true;
  }

  //BIG - O(sqrt(n))
  