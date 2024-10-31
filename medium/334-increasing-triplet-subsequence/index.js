var increasingTriplet = function (nums) {
  let lowerValue = Infinity;
  let maxValue = Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= lowerValue) {
      lowerValue = nums[i];
    }

    if (nums[i] > lowerValue && nums[i] <= maxValue) {
      maxValue = nums[i];
    }

    if (nums[i] > lowerValue && nums[i] > maxValue) {
      return true;
    }
  }
  return false;
};
