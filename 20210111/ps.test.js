const numberArray = (numbers) => (
  numbers.map((number, index) => [
    number,
    [...numbers.slice(0, index), ...numbers.slice(index + 1)]
  ])
)

const pickAndAddTwoNumbers = (numbers) => [
  ...new Set(
    numberArray(numbers)
      .map(([a, seconds]) => seconds.map(b => a + b))
      .flat())
].sort((a, b) => a - b)

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
