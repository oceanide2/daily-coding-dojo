const div = (n) => [Math.trunc(n / 3), n % 3];

const toTernary = (n) => {
  const numbers = [];

  while (n) {
    const [q, r] = div(n);
    numbers.unshift(r);
    n = q;
  }

  return numbers;
}

const solution = (n) => (
  toTernary(n)
    .map((x, i) => x * 3 ** i)
    .reduce((acc, cur) => acc + cur)
);

describe('solution', () => {
  it('converts to ternary number, flip it over and coverts to decimal #1', () => {
    const input = 45;
    const output = 7;

    expect(solution(input)).toBe(output);
  });

  it('converts to ternary number, flip it over and coverts to decimal #2', () => {
    const input = 125;
    const output = 229;

    expect(solution(input)).toBe(output);
  });
});
