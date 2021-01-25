const divisibleNumber1 = (arr, divisor) => {
  const res = arr.reduce((acc, cur) => (
    cur % divisor === 0 ? [...acc, cur] : acc), []
  ).sort((a, b) => a - b)

  return res.length === 0 ? [-1] : res;
}

const divisibleNumber2 = (arr, divisor) => {
  const res = arr.filter(e => e % divisor === 0);

  return res.length === 0 ? [-1] : res.sort((a, b) => a - b);
}

describe('divisibleNumber', () => {
  it('get divisible element of integer array with divisor #1', () => {
    const arr = [5, 9, 7, 10];
    const divisor = 5;

    const answer = [5, 10];

    expect(divisibleNumber1(arr, divisor)).toEqual(answer);
    expect(divisibleNumber2(arr, divisor)).toEqual(answer);
  })

  it('get divisible element of integer array with divisor #2', () => {
    const arr = [2, 36, 1, 3];
    const divisor = 1;

    const answer = [1, 2, 3, 36];

    expect(divisibleNumber1(arr, divisor)).toEqual(answer);
    expect(divisibleNumber2(arr, divisor)).toEqual(answer);
  })

  it('get divisible element of integer array with divisor #3', () => {
    const arr = [3, 2, 6];
    const divisor = 10;

    const answer = [-1];

    expect(divisibleNumber1(arr, divisor)).toEqual(answer);
    expect(divisibleNumber2(arr, divisor)).toEqual(answer);
  })

});
