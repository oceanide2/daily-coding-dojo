const findNumber = (array, commands) => (
  commands.reduce((acc, [start, end, index]) => (
    [
      ...acc,
      [...array.slice(start - 1, end)].sort((a, b) => a - b)[index - 1]
    ]
  ), [])
);

describe('findNumber', () => {
  it('returns kth number of extracted array using commands array', () => {
    const array = [1, 5, 2, 6, 3, 7, 4];
    const commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];

    const numbers = [5, 6, 3];

    expect(findNumber(array, commands)).toEqual(numbers);
  });
});
