let word = "AMADAMa";

function isPalindrome(word) {
  let i = 0,
    j = word.length - 1;
  while (i <= j) {
    if (word[i].toLowerCase() != word[j].toLowerCase()) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}

console.log(isPalindrome(word));

