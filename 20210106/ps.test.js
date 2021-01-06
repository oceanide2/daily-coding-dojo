function findUnfinishedRunner(participant, completion) {
  const runner = {};

  participant.forEach(name => {
    if (runner[name]) {
      runner[name] += 1;
      return;
    }
    runner[name] = 1;
  });

  completion.forEach(name => {
    runner[name] -= 1;
  });

  const numberOfRunner = Object.values(runner);
  const index = numberOfRunner.findIndex(number => number === 1);

  return Object.keys(runner)[index];
}

describe('findUnfinishedRunner', () => {
  it('returns the name of incompleted runner #1', () => {
    const participant = ['mislav', 'stanko', 'mislav', 'ana'];
    const completion = ['stanko', 'ana', 'mislav'];

    const unfinishedRunner = 'mislav';

    expect(findUnfinishedRunner(participant, completion)).toBe(unfinishedRunner)
  });

  it('returns the name of incompleted runner #2', () => {
    const participant = ['leo', 'kiki', 'eden'];
    const completion = ['leo', 'kiki'];

    const unfinishedRunner = 'eden';

    expect(findUnfinishedRunner(participant, completion)).toBe(unfinishedRunner)
  });

  it('returns the name of incompleted runner #3', () => {
    const participant = ['marina', 'josipa', 'nikola', 'vinko', 'filipa'];
    const completion = ['josipa', 'filipa', 'marina', 'nikola'];

    const unfinishedRunner = 'vinko';

    expect(findUnfinishedRunner(participant, completion)).toBe(unfinishedRunner)
  });
});
