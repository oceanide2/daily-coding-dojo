const descendString = (s) => s.split('').sort().reverse().join('')

describe('descendString', () => {
  it('returns descending order string of input string', () => {
    expect(descendString('Zbcdefg')).toBe('gfedcbZ');
  })
})
