const evenOrOdd = (num) => (
  (num % 2 === 0) ? 'Even' : 'Odd'
)

describe('evenOrOdd()', () => {
  describe('when even number', () => {
    it('returns "Even" string', () => {
      expect(evenOrOdd(4)).toBe('Even');
    });
  })

  describe('when odd number', () => {
    it('returns "Odd" string', () => {
      expect(evenOrOdd(3)).toBe('Odd');
    });
  })
});

