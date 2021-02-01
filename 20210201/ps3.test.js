const waterMelon = (n) => (
  [...new Array(n)]
    .map((_, i) => (i % 2 === 0) ? '수' : '박')
    .join('')
)

describe('repeatString', () => {
  it('returns strings of length n with repeated pattern', () => {
    expect(waterMelon(3)).toBe('수박수');
    expect(waterMelon(4)).toBe('수박수박');
  });
});

