const checkStringLength = (s) => s.length === 4 || s.length === 6
const isNumberString = (s) => checkStringLength(s) && s.match(/^[0-9]+$/) !== null

describe('isNumberString', () => {
  it('checks if all elements of "1234" string is number', () => {
    expect(isNumberString('1234')).toBeTruthy();
  })

  it('checks if all elements of "12.34" string is number', () => {
    expect(isNumberString('12.34')).toBeFalsy();
  })

  it('checks if all elements of "1234567" string is number', () => {
    expect(isNumberString('1234567')).toBeFalsy();
  })

  it('checks if all elements of "a123" string is number', () => {
    expect(isNumberString('a123')).toBeFalsy();
  })

  it('checks if all elements of "a123" string is number', () => {
    expect(isNumberString('a1234567')).toBeFalsy();
  })

  it('checks if all elements of "1e22" string is number', () => {
    expect(isNumberString('1e22')).toBeFalsy();
  })
})
