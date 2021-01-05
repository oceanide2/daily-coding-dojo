const unique = (arr) => Array.from(new Set([...arr]));

describe('unique', () => {
  it('remove duplicated string elements', () => {
    const array = ['cat', 'dog', 'dog', 'cat', 'rabbit', 'rabbit'];

    expect(unique(array)).toEqual(['cat', 'dog', 'rabbit']);
  });

  it('remove duplicated number elements', () => {
    const numbers = [1, 1, 2, 2, 3, 3];

    expect(unique(numbers)).toEqual([1, 2, 3]);
  });

  it('remove duplicated string and number elements', () => {
    const mixedArray = [1, 1, 'cat', 2, 'dog', '2', 'dog', '3', 'cat', 'rabbit'];

    expect(unique(mixedArray)).toEqual([1, 'cat', 2, 'dog', '2', '3', 'rabbit']);
  });

  it('does not change initial array elements', () => {
    const array = ['cat', 'dog', 'dog', 'cat', 'rabbit', 'rabbit'];

    unique(array);

    expect(array).toEqual(array);
  });
});
