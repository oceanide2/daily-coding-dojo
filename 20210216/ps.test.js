const sortStringsByNthCharacter = (strings, n) => {
  return strings.sort().sort((a, b) => {
    if (a[n] > b[n]) return 1;
    if (a[n] < b[n]) return -1;
    return 0;
  });
}

describe('sortStringsByNthCharacter()', () => {
  it('sorts by nth index character of each string in ascending order', () => {
    expect(sortStringsByNthCharacter(['sun', 'bed', 'car'], 1)).toEqual(['car', 'bed', 'sun']);
    expect(sortStringsByNthCharacter(['abce', 'abcd', 'cdx'], 2)).toEqual(['abcd', 'abce', 'cdx']);
  });
});

