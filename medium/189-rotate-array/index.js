/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  // if K is bigger than the length of the array, we don't need to
  // Rotate the array several times, we just need to rotare the
  // remider (%) value
  const ROTATION = k >= nums.length ? k % nums.length : k;

  // if the rotation is 0, we don't need to rotate anything :)
  if (ROTATION === 0) {
    return;
  }

  const RIGHT_SIDE = nums.slice(-ROTATION);
  const LEFT_SIDE = nums.slice(0, nums.length - ROTATION);

  for (let i = 0; i < ROTATION; i += 1) {
    nums[i] = RIGHT_SIDE[i];
  }

  for (let i = 0; i < nums.length - ROTATION; i += 1) {
    nums[i + ROTATION] = LEFT_SIDE[i];
  }
};
