const range = (n) => [...new Array(n)].map((_, i) => i += 1)
const factor = (arr, n) => (
  arr.reduce((acc, cur) => (n % cur === 0) ? [...acc, cur] : acc, [])
)

const primeNumber = (n) => (
  range(n).reduce((acc, cur) => (
    factor(range(cur), cur).length === 2 ? [...acc, cur] : acc
  ), []).length
)

describe('primeNumber', () => {
  it('returns the count of prime number from 1 to integer n', () => {
    expect(primeNumber(10)).toBe(4);
    expect(primeNumber(5)).toBe(3);
  });
});

describe('range', () => {
  it('returns all number from 1 to integer n', () => {
    expect(range(5)).toEqual([1, 2, 3, 4, 5]);
  })
});

