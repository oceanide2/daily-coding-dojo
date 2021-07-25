const RemoveDuplicateElement = (nums) => {
  if (nums.length === 0) {
    return 0;
  }

  nums.sort((a, b) => a - b);

  let len = 1;
  let currentElement = nums[0];

  nums.forEach(number => {
    if (currentElement !== number) {
      currentElement = number;
      len += 1;
    }
  });

  return len;
}

test('RemoveDuplicateElement()', () => {
  expect(RemoveDuplicateElement([0, 0, 0, 1, 2, 2, 2])).toBe(3);
  expect(RemoveDuplicateElement([0, 0, 2, 1, 2, 3, 2])).toBe(4);
  expect(RemoveDuplicateElement([])).toBe(0);
});
