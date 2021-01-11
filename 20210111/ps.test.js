function pickAndAddTwoNumbers(numbers) {
  const results = new Set();

  numbers.forEach((numberOne, index) => {
    const seconds = [...numbers.slice(0, index), ...numbers.slice(index + 1)];

    seconds.forEach(numberTwo => results.add(numberOne + numberTwo));
  });

  return [...results].sort((a, b) => a - b);
}

describe('pickTwoAndAddNumbers', () => {
  it('picks and adds two numbers from array and returns sorted number array #1', () => {
    const numbers = [2, 1, 3, 4, 1];

    const resultNumbers = [2, 3, 4, 5, 6, 7];

    expect(pickAndAddTwoNumbers(numbers)).toEqual(resultNumbers);
  });

  it('picks and adds two numbers from array and returns sorted number array #2', () => {
    const numbers = [5, 0, 2, 7];

    const resultNumbers = [2, 5, 7, 9, 12];

    expect(pickAndAddTwoNumbers(numbers)).toEqual(resultNumbers);
  });
});
