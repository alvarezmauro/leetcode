/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  if (chars.length <= 1) {
    return chars.length;
  }

  let letterTarget = "";
  let count = 0;
  const charsLength = chars.length;

  const addCountAndUpdateArray = (countValue) => {
    if (countValue > 1) {
      const countResult = `${count}`.split("");
      chars.push(letterTarget, ...countResult);
    } else if (countValue === 1) {
      chars.push(letterTarget);
    }
  };

  chars.forEach((char, index) => {
    if (letterTarget !== char) {
      addCountAndUpdateArray(count);
      letterTarget = char;
      count = 1;
    } else {
      count += 1;
    }
  });

  addCountAndUpdateArray(count);
  chars.splice(0, charsLength);
  return chars.length;
};

let value = ["a", "a", "a", "b", "b", "a", "a"];
console.log(compress(value));
console.log(value);
