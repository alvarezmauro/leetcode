/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (s === "") {
    return true;
  }

  let pointerSlow = 0;
  let pointerFast = 0;
  let result = "";

  for (let i = 0; i < t.length; i += 1) {
    letterS = s[pointerSlow];
    letterT = t[pointerFast];

    if (letterS === letterT) {
      result += letterT;
      if (result === s) {
        return true;
      }
      pointerSlow += 1;
    }

    pointerFast += 1;
  }

  return false;
};

console.log(isSubsequence("abc", "ahbgdc"));
