const integerSquareRoot = (n) => {
  const x = Math.sqrt(n);

  return String(x).includes('.') ? -1 : Math.pow(x + 1, 2);
};

const integerSquareRoot2 = (n) => {
  const x = Math.sqrt(n);

  return Number.isInteger(x) ? Math.pow(x + 1, 2) : -1;
}

describe('integerSqureRoot', () => {
  describe('when n is the square of the positivie integer', () => {
    it('returns the power of x + 1', () => {
      expect(integerSquareRoot(121)).toBe(144);
      expect(integerSquareRoot2(121)).toBe(144);
    });
  });

  describe('when n is not the squre of the positive integer', () => {
    it('returns -1', () => {
      expect(integerSquareRoot(3)).toBe(-1);
      expect(integerSquareRoot2(3)).toBe(-1);
    });
  });
});

