const twoSums = (nums, target) => {
  const hashtable = {}

  for (let i = 0; i < nums.length; i++) {
    let value = target - nums[i];

    if ((hashtable[value] !== undefined) && (hashtable[value] !== i)) {
      return [i, hashtable[value]].sort();
    }

    hashtable[nums[i]] = i;
  }
};

test('twoSums', () => {
  expect(twoSums([2, 7, 8, 11, 15], 13)).toEqual([0, 3]);
});
