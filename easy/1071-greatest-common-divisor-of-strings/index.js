/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  // This line checks if str1 and str2 can be constructed by
  // concatenating some common substring. If str1 + str2
  // is not equal to str2 + str1, then there is no common divisor string,
  if (str1 + str2 !== str2 + str1) return "";
  let a = str1.length;
  let b = str2.length;

  // This loop calculates the GCD of a and b using the Euclidean algorithm.
  // It repeatedly sets b to a % b (the remainder when a is divided by b)
  // and a to b, until b becomes 0. At that point, a will contain the GCD
  // of the original lengths.
  while (b) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return str1.substring(0, a);
};

console.log(gcdOfStrings("ABABAB", "ABAB"));
