const gcd = (a, b) => {
  if (b === 0) return a;

  return gcd(b, a % b);
}

const lcd = (a, b) => {
  return (a * b) / gcd(a, b);
}

const gcd_lcd = (n, m) => {
  return [gcd(n, m), lcd(n, m)];
}

describe('gcd_lcd()', () => {
  it('return gcd and lcd of integer n and m', () => {
    expect(gcd_lcd(3, 12)).toEqual([3, 12]);
    expect(gcd_lcd(2, 5)).toEqual([1, 10]);
  });
});
