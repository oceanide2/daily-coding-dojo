const sum = (arr) => arr.reduce((acc, cur) => acc += cur, 0)
const range = (len) => [...new Array(len)].map((_, i) => i)

const dotProduct = (a, b) => sum(range(a.length).map((_, i) => a[i] * b[i]))

const dotProduct2 = (a, b) => a.reduce((acc, _, i) => acc += a[i] * b[i], 0)

describe('dotProduct', () => {
  it('returns dot product with integer array a and b', () => {
    expect(dotProduct([1, 2, 3, 4], [-3, -1, 0, 2])).toBe(3);
    expect(dotProduct([-1, 0, 1], [1, 0, -1])).toBe(-2);

    expect(dotProduct2([1, 2, 3, 4], [-3, -1, 0, 2])).toBe(3);
    expect(dotProduct2([-1, 0, 1], [1, 0, -1])).toBe(-2);
  });
});

describe('sum', () => {
  it('returns sum of integer array', () => {
    expect(sum([1, 2, 3, 4])).toBe(10);
  });
});

describe('range', () => {
  it('returns array with length from 0 to len - 1', () => {
    expect(range(5)).toEqual([0, 1, 2, 3, 4]);
  });
});

