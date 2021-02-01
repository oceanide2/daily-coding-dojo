const findKim = (seoul) => {
  const index = seoul.indexOf('Kim');

  return `김서방은 ${index}에 있다`;
}

describe('findKim', () => {
  it('returns string that contains index of Kim', () => {
    const seoul = ['Jane', 'Kim'];
    const resultString = '김서방은 1에 있다';

    expect(findKim(seoul)).toBe(resultString);
  });

  it('returns string that contains index of Kim', () => {
    const seoul = ['Jane', 'John','Kim'];
    const resultString = '김서방은 2에 있다';

    expect(findKim(seoul)).toBe(resultString);
  });
});

