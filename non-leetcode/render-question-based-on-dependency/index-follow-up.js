function getRenderedQuestions(questions) {
  const n = questions.length;
  const rendered = new Array(n).fill(false);
  const result = [];

  let progress = true;

  while (progress) {
    progress = false;

    for (let i = 0; i < n; i++) {
      const [isAnswered, dependencies] = questions[i];

      if (rendered[i] || !isAnswered) continue;

      const dependencyIndex = dependencies[0];
      const canRender =
        dependencyIndex === undefined || rendered[dependencyIndex];

      if (canRender) {
        rendered[i] = true;
        result.push(i);
        progress = true;
      }
    }
  }

  return result;
}
