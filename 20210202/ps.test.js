const findLeastNumber = (arr) => [...arr].sort((a, b) => a - b)[0]

const deleteLeastNumber = (arr) => {
  const index = arr.indexOf(findLeastNumber(arr));

  const sliceArray = [...arr.slice(0, index), ...arr.slice(index + 1)];

  return sliceArray.length === 0 ? [-1] : sliceArray;
}

describe('deleteLeastNumber', () => {
  it('returns array that is removed element of most least number', () => {
    expect(deleteLeastNumber([4, 3, 2, 1])).toEqual([4, 3, 2]);
    expect(deleteLeastNumber([10])).toEqual([-1]);
  });
});

