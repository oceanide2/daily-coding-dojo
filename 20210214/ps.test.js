const MAX_COUNT = 500;

const isEven = (n) => (n % 2 === 0)

const collatz = (n, count = 0) => {
  if (n === 1) {
    return count;
  }

  if (count === 500) {
    return -1;
  }

  const number = isEven(n) ? (n / 2) : (n * 3) + 1;
  return collatz(number, count + 1);
}

describe('collatz()', () => {
  it('returns the number of count until the given number is 1', () => {
    expect(collatz(6)).toBe(8);
    expect(collatz(626331)).toBe(-1);
    expect(collatz(1)).toBe(0);
  });
});
