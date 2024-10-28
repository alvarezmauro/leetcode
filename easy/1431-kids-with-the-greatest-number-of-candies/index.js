/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  // find greates number
  let greatesNumber = candies[0];
  candies.forEach((kidCandies) => {
    greatesNumber = kidCandies >= greatesNumber ? kidCandies : greatesNumber;
  });

  // find if giving the extra candies, the number is >= greates number
  const result = candies.map((kidCandies) => {
    return kidCandies + extraCandies >= greatesNumber;
  });

  return result;
};
