/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function (deck) {
  if (deck.length === 1) {
    return false;
  }

  let groups = {};
  deck.map((card) => {
    groups[card] = (groups[card] || 0) + 1;
  });

  function gcd(a, b) {
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b);
  }

  let values = Object.values(groups);
  let g = values[0];
  for (let i = 0; i < values.length; i += 1) {
    g = gcd(g, values[i]);
    if (gcd(g, values[i]) === 1) {
      return false;
    }
  }

  return true;
};

console.log(hasGroupsSizeX([1, 2, 3, 4, 4, 3, 2, 1]));
