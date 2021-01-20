function solution(n) {
  return parseInt([...n.toString(3)].reverse().join(''), 3);
}

describe('solution', () => {
  it('converts to base 3 number, flip it over and coverts to decimal #1', () => {
    const input = 45;
    const output = 7;

    expect(solution(input)).toBe(output);
  });

  it('converts to base 3 number, flip it over and coverts to decimal #2', () => {
    const input = 125;
    const output = 229;

    expect(solution(input)).toBe(output);
  });
});
