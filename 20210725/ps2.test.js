const removeDuplicatedElement = (nums) => (
  Object.keys(nums.reduce((acc, cur) => (
    acc[cur] === undefined ? { ...acc, [cur]: 1 } : { ...acc, [cur]: acc[cur] + 1 }
  ), {})).length
)

test('removeDuplicatedElement', () => {
  expect(removeDuplicatedElement([0, 0, 0, 1, 2, 2, 2])).toBe(3);
  expect(removeDuplicatedElement([])).toBe(0);
  expect(removeDuplicatedElement([0, 0, 2, 1, 2, 3, 2])).toBe(4);
});
