/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const vowelsRegex = /^[aeiou]$/i;
  let letters = s.split("");
  let vowels = [];
  let vowelsIndexes = [];

  letters.forEach((letter, index) => {
    console.log();
    if (vowelsRegex.test(letter)) {
      vowels.push(letter);
      vowelsIndexes.push(index);
    }
  });

  vowels.reverse();
  vowelsIndexes.forEach((vowelsIndexe, index) => {
    letters[vowelsIndexe] = vowels[index];
  });

  return letters.join("");
};
