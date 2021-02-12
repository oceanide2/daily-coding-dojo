const range = (n) => [...new Array(n)].map((_, i) => i += 1)

const spacedNumber = (x, n) => range(n).reduce((acc, cur) => [...acc, cur * x], [])

describe('spacedNumber()', () => {
  it('returns the number of n of integer spaced by x', () => {
    expect(spacedNumber(2, 5)).toEqual([2, 4, 6, 8, 10]);
    expect(spacedNumber(4, 3)).toEqual([4, 8, 12]);
    expect(spacedNumber(-4, 2)).toEqual([-4, -8]);
  });
});

describe('range()', () => {
  it('returns array that has elements from 1 to n', () => {
    expect(range(5)).toEqual([1, 2, 3, 4, 5]);
  });
});

