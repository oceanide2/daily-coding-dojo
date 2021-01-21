function getMiddleCharacter(s) {
  const index = Math.floor(s.length / 2);

  const offset = s.length % 2 ? 0 : 1;

  return s.slice(index - offset, index + 1);
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
