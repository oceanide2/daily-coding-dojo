const uniqueElementArrayLength = ((nums) => {
  const hashtable = {};

  nums.forEach((number) => {
    if (hashtable[number] === undefined) {
      hashtable[number] = 1;
    }
    hashtable[number] += 1;
  });

  return Object.keys(hashtable).length;
});

test('uniqueElementArrayLength', () => {
  expect(uniqueElementArrayLength([0, 0, 0, 1, 2, 2, 2])).toBe(3);
  expect(uniqueElementArrayLength([0, 0, 2, 1, 2, 3, 2])).toBe(4);
});
