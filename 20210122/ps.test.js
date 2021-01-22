const last = arr => arr[arr.length - 1];

const removeConsecutiveNumbers = (arr) => (
  arr.reduce((acc, cur) => (
    last(acc) !== cur ? [...acc, cur] : acc), [])
)

describe('removeConsecutiveNumbers', () => {
  it('removes consecutive and duplicated numbers of array', () => {
    const input = [1, 1, 3, 3, 0, 1, 1];
    const output = [1, 3, 0, 1];

    expect(removeConsecutiveNumbers(input)).toEqual(output);
  });

  it('removes consecutive and duplicated numbers of array', () => {
    const input = [4, 4, 4, 3, 3];
    const output = [4, 3];

    expect(removeConsecutiveNumbers(input)).toEqual(output);
  });
});
