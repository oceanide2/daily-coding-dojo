const toArray = (str) => str.toLowerCase().split('');

const count = (arr, c) => arr.filter(e => e === c).length;

const isSameCharacterCount = (s) => (
  count(toArray(s), 'p') === count(toArray(s), 'y')
);

describe('isSameCharacterCount', () => {
  it('checks if the number of p and y characters is same', () => {
    const str = 'pPoooyY';

    expect(isSameCharacterCount(str)).toBeTruthy();
  });

  it('checks if the number of p and y characters is different', () => {
    const str = 'Pyy';

    expect(isSameCharacterCount(str)).toBeFalsy();
  });

  it('checks if p and y characters are not existed', () => {
    const str = 'abcD';

    expect(isSameCharacterCount(str)).toBeTruthy();
  });
});
