var isValid = function (s) {
  let opened = [],
    brackets = {
      "(": ")",
      "{": "}",
      "[": "]",
    };
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
      opened.push(s[i]);
    } else if (s[i] == brackets[opened[opened.length - 1]]) {
      opened.pop();
    }else{
        return false
    }
  }
  return opened.length == 0;
};

console.log(isValid("()"));
