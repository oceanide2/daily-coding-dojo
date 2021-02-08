const reverseNumberDigits = (n) => {
  return String(n).split('').map(el => Number(el)).reverse();
}

const reverseNumberDigits2 = (n) => {
  const arr = [];

  while (n > 0) {
    arr.push(n % 10);

    n = Math.floor(n / 10);
  }

  return arr;
}

describe('reverseNumberDigits', () => {
  it('returns array that contains reverse order of each number digit', () => {
    expect(reverseNumberDigits(12345)).toEqual([5, 4, 3, 2, 1]);
    expect(reverseNumberDigits(6789)).toEqual([9, 8, 7, 6]);

    expect(reverseNumberDigits2(12345)).toEqual([5, 4, 3, 2, 1]);
    expect(reverseNumberDigits2(6789)).toEqual([9, 8, 7, 6]);
  });
});

