/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  const length = word1.length >= word2.length ? word1.length : word2.length;
  console.log(length);
  const ArrWord1 = word1.split("");
  const ArrWord2 = word2.split("");
  let result = [];
  for (let i = 0; i < length; i += 1) {
    result.push(ArrWord1[i] || "");
    result.push(ArrWord2[i] || "");
  }
  return result.join("");
};

console.log(mergeAlternately("abcextra", "pqr"));
