const toNumber = (s) => parseInt(s, 10)

describe('toNumber()', () => {
  it('returns number that is converted from string', () => {
    expect(toNumber('+1234')).toBe(1234);
    expect(toNumber('-1234')).toBe(-1234);
  });
});

