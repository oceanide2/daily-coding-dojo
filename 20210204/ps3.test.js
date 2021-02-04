const sumOfDigit = (n) => (
  String(n)
    .split('')
    .reduce((acc, cur) => acc += Number(cur), 0)
)

describe('sumOfDigit', () => {
  it('returns sum of all digit from integer n', () => {
    expect(sumOfDigit(123)).toBe(6);
    expect(sumOfDigit(987)).toBe(24);
  })
});

