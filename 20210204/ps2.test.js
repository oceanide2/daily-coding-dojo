const range = (n) => [...new Array(n)].map((_, i) => i += 1)

const sumOfDivisor = (n) => (
  range(n).reduce((acc, cur) => ((n % cur === 0) ? acc += cur : acc), 0)
)

describe('sumOfDivisor', () => {
  it('return sum of all divisor of integer 12', () => {
    expect(sumOfDivisor(12)).toBe(28);
    expect(sumOfDivisor(5)).toBe(6);
  })
});

describe('range', () => {
  it('return array that have elements from 1 from integer n', () => {
    expect(range(5)).toEqual([1, 2, 3, 4, 5]);
  });
});

