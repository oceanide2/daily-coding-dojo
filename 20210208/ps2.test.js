const descendingInteger = (n) => (
  Number(String(n).split('').sort((a, b) => b - a).join(''))
);

describe('descendingInteger()', () => {
  it('returns descending order of integer', () => {
    expect(descendingInteger(118372)).toBe(873211);
  })
});
