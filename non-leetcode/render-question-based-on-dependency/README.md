# Description

You are given a list of lists where each list represents a question in an application. Each question has:

- A boolean value at index `0`, indicating whether the question is answered (`true`) or unanswered (`false`).
- A list of integers at index `1`, representing the indices of other questions that this question depends on. A question can only be rendered if:
  1. It is answered.
  2. All of its dependencies (other questions) are also rendered.

You need to write a function `getRenderedQuestions(questions)` that returns a list of indices of questions that can be rendered.

**Input**

- `questions`: A list of `n` lists, where `questions[i]` is of the form:
  - `questions[i][0]`: A boolean value indicating whether question `i` is answered.
  - `questions[i][1]`: A list of integers representing the indices of questions that question `i` depends on.

**Output**

- Return a list of integers representing the indices of the questions that can be rendered, in **any order**.

**Constraints:**

- `1 <= n <= 1000`
- Each question's list of dependencies will only include valid indices (i.e., between `0` and `n-1`).
- There are no cyclic dependencies between questions.

**Example 1**

Input:

```js
questions = [
  [true, [1]], // Question 0 is answered, depends on question 1
  [true, []], // Question 1 is answered, no dependencies
  [false, [1]], // Question 2 is not answered, depends on question 1
];
```

Output: `[1, 0]`

Explanation:

- Question 1 can be rendered because it is answered and has no dependencies.
- Question 0 can be rendered because it is answered and question 1 (its only dependency) is rendered.
- Question 2 cannot be rendered because it is not answered.

**Example 2**

Input:

```js
questions = [
  [false, [1]], // Question 0 is not answered, depends on question 1
  [true, []], // Question 1 is answered, no dependencies
  [true, [0]], // Question 2 is answered, depends on question 0
];
```

Output: `[1]`

Explanation:

- Question 1 can be rendered because it is answered and has no dependencies.
- Question 0 cannot be rendered because it is not answered.
- Question 2 cannot be rendered because question 0 (its only dependency) is not rendered.

**Example 3**

Input:

```js
questions = [
  [true, []], // Question 0 is answered, no dependencies
  [true, []], // Question 1 is answered, no dependencies
  [true, []], // Question 2 is answered, no dependencies
];
```

Output: `[0, 1, 2]`

Explanation:
All questions can be rendered since they are all answered and have no dependencies.

---

**Follow-Up:**

Handle cases where the dependencies are not given in order. You may assume that the dependency list for any question can reference questions that appear after it in the list.
