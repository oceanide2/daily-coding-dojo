const toArray = (n) => [...String(n)].map(el => Number(el))
const sum = (arr) => arr.reduce((acc, cur) => acc += cur, 0)
const divisible = (a, b) => a % b === 0 ? true : false

const isHashad = (n) => divisible(n, sum(toArray(n)))

describe('isHashad()', () => {
  it('return true if n is a hashad number', () => {
    expect(isHashad(18)).toBeTruthy();
  });
})

describe('sum()', () => {
  it('returns sum of array elements with number', () => {
    expect(sum([1, 2, 3, 4])).toBe(10);
  });
});

describe('toArray()', () => {
  it('returns array that has element from integer number', () => {
    expect(toArray(18)).toEqual([1, 8]);
  });
});

