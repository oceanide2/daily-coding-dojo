function findUnfinishedRunner(participant, completion) {
  const runners = {};

  participant.forEach(name => {
    if (runners[name]) {
      runners[name] += 1;
      return;
    }
    runners[name] = 1;
  });

  completion.forEach(name => {
    runners[name] -= 1;
  });

  for (const name in runners) {
    if (runners[name]) {
      return name;
    }
  }
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
