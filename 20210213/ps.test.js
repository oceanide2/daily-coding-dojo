const isEven = (n) => n % 2 === 0;

const collatz = (num) => {
  let count = 0;

  if (num === 1) {
    return 0;
  }

  while (true) {
    num = isEven(num) ? num / 2 : (num * 3) + 1;
    count += 1;

    if (num === 1) return count;
    if (count === 500) return -1;
  }
}

describe('collatz()', () => {
  it('returns the number of calculation until the given number is 1', () => {
    expect(collatz(6)).toBe(8);
    expect(collatz(16)).toBe(4);
    expect(collatz(626331)).toBe(-1);
  });
});

