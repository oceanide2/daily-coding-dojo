const twoSums1 = (nums, target) => {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
};

const twoSums = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    const newNums = [...nums];
    newNums[i] = '';

    const index = newNums.findIndex(e => e === target - nums[i])

    if (index !== -1) return [i, index];
  }
};

test('Two sums', () => {
  expect(twoSums([2, 7, 11, 15], 9)).toEqual([0, 1]);
  expect(twoSums([3, 2, 4], 6)).toEqual([1, 2]);
  expect(twoSums([3, 3], 6)).toEqual([0, 1]);
});
