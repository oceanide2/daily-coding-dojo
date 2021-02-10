const hidePhoneNumber = (phoneNumber) => {
  const index = phoneNumber.length - 4;

  return `${'*'.repeat(index)}${phoneNumber.slice(index)}`;
}

describe('hidePhoneNumber()', () => {
  it('returns hidden phone number except last 4 numbers', () => {
    expect(hidePhoneNumber('01033334444')).toBe('*******4444');
    expect(hidePhoneNumber('027778888')).toBe('*****8888')
    expect(hidePhoneNumber('5555')).toBe('5555')
  })
});

