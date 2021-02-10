const average = (arr) => arr.reduce((acc, cur) =>  acc += cur, 0) / arr.length

describe('average()', () => {
  it('returns average of element of integer array', () => {
    expect(average([1, 2, 3, 4])).toBe(2.5);
    expect(average([5, 5])).toBe(5);
  })
});

