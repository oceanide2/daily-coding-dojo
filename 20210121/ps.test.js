function getMiddleCharacter(s) {
  const i = Math.floor(s.length / 2);

  return s.length % 2 ? s[i] : s.slice(i - 1, i + 1);
}

describe('getMiddleCharacter', () => {
  it('return middle character of string with odd length', () => {
    const string = 'abcde';
    const char = 'c';

    expect(getMiddleCharacter(string)).toBe(char);
  });

  it('return middle character of string with even length', () => {
    const string = 'qwer';
    const char = 'we';

    expect(getMiddleCharacter(string)).toBe(char);
  });
});
