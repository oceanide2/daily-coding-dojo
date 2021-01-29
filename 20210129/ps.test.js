const len = (a, b) => a >= b ? (a - b + 1) : (b - a + 1)
const sum = (a, b) => a + b

const sumBetweenTwoIntegers = (a, b) => sum(a, b) * len(a, b) / 2

describe('sumBetweenTwoIntegers', () => {
  describe('when a and b is positive', () => {
    it('checks summation when b is greater than a', () => {
      expect(sumBetweenTwoIntegers(3, 5)).toBe(12);
    });

    it('checks summation when a is greater than b', () => {
      expect(sumBetweenTwoIntegers(10, 5)).toBe(45);
    });

    it('checks sumation when a and b is same', () => {
      expect(sumBetweenTwoIntegers(7, 7)).toBe(7);
    })
  })

  describe('when a and b is negative', () => {
    it('checks summation when b is greater than a', () => {
      expect(sumBetweenTwoIntegers(-10, -5)).toBe(-45);
    });

    it('checks summation when a is greater than b', () => {
      expect(sumBetweenTwoIntegers(-5, -10)).toBe(-45);
    });

    it('checks sumation when a and b is same', () => {
      expect(sumBetweenTwoIntegers(-7, -7)).toBe(-7);
    })
  })

  describe('when a is postive and b is negative', () => {
    it('checks summation', () => {
      expect(sumBetweenTwoIntegers(10, -5)).toBe(40)
    })
  })

  describe('when a is negative and b is postive', () => {
    it('checks summation', () => {
      expect(sumBetweenTwoIntegers(-10, 5)).toBe(-40)
    })
  })
});
