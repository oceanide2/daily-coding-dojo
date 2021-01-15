function getScore(answers, userAnswers) {
  return answers.reduce((count, answer, i) => (
    answer === userAnswers[i % userAnswers.length]
      ? count += 1
      : count
  ), 0);
}

const indexOfAll = (arr, val) => (
  arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), [])
);

function findHighScoreUser(answers) {
  const userAnswers = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
  ];

  const userScores
    = userAnswers.map(userAnswer => getScore(answers, userAnswer));

  return indexOfAll(userScores, Math.max(...userScores)).map(el => el + 1);
}

describe('findHighGradeUserUser', () => {
  it('returns the person who get most correct answer #1', () => {
    const answers = [1, 2, 3, 4, 5];

    const users = [1];

    expect(findHighScoreUser(answers)).toEqual(users);
  });

  it('returns the person who get most correct answer #2', () => {
    const answers = [1, 3, 2, 4, 2];

    const users = [1, 2, 3];

    expect(findHighScoreUser(answers)).toEqual(users);
  });
})
