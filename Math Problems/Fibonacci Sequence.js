function fibonacci(n) {
  let elements = [0, 1];
  for (let i = 2; i < n; i++) {
    elements[i] = elements[elements.length - 1] + elements[elements.length - 2];
  }
  return elements;
}

console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(7));
