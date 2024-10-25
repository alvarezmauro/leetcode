function getRenderedQuestions(questions) {
  let questionsAnswered = [];

  for (let i = 0; i < questions.length; i += 1) {
    const question = questions[i];
    const answered = question[0];
    if (answered) {
      const dependencyIndex = question[1][0];
      if (dependencyIndex !== undefined) {
        const dependencyValue = questions[dependencyIndex];
        if (dependencyValue[0]) {
          questionsAnswered.push(i);
        }
      } else {
        questionsAnswered.push(i);
      }
    }
  }
  return questionsAnswered;
}

const questions = [
  [true, []],
  [true, []],
  [true, []],
];

console.log("Result : ", getRenderedQuestions(questions));
