/**
 * @param {string} word
 * @return {string}
 */
var reorderWord = function (word) {
  if (word.length === 1) {
    return word;
  }

  const letters = word.split("");

  let lettersGroup = {};
  letters.map((letter) => {
    lettersGroup[letter] = (lettersGroup[letter] || 0) + 1;
  });

  const sortedGroups = Object.entries(lettersGroup)
    .sort((a, b) => a[1] - b[1])
    .reverse();
  let wordResult = "";
  sortedGroups.forEach((group) => {
    wordResult += multiplyLetter(group[0], group[1]);
  });

  return wordResult;
};

const multiplyLetter = (letter, number) => {
  let result = "";
  for (i = 0; i < number; i += 1) {
    result += letter;
  }
  return result;
};

const word = "tree";
console.log(reorderWord(word));
