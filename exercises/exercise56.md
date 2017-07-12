## Exercise

Each round, players receive a score between 0 and 100, which you use to rank them from highest to lowest. So far you're using an algorithm that sorts in O(nlgn) time, but players are complaining that their rankings aren't updated fast enough. You need a faster sorting algorithm.

Write a function that takes:

a list of `unsorted_scores`
the `highest_possible_score` in the game
and returns a sorted list of scores in less than O(nlgn) time.

For example:

```ts
unsorted_scores = [37, 89, 41, 65, 91, 53];
HIGHEST_POSSIBLE_SCORE = 100;

sortScores(unsorted_scores, HIGHEST_POSSIBLE_SCORE)
//returns [91, 89, 65, 53, 41, 37]
```

## Solution

```ts
/**
 * Sort scores in O(n)
 *
 * @param {Array<number>} scores
 * @param {number} max
 * @returns {Array<number>}
 */
const sortScores = function(scores: Array<number>, max: number): Array<number> {
  const scoresMap = new Map();

  for (let i = 0; i <= max; i++) {
    scoresMap.set(i, 0);
  }

  for (let i = 0; i < scores.length; i++) {
    scoresMap.set(scores[i], scoresMap.get(scores[i]) + 1);
  }

  let n = 0;
  for (let i = 0; i <= max; i++) {
    for (let j = 0; j < scoresMap.get(i); j++) {
      scores[n] = i;
      n++;
    }
  }

  return scores;
};

console.assert(
  sortScores([10, 20, 21, 12, 3, 1, 99], 100).toString() === '1,3,10,12,20,21,99',
  'Wrong Implementation'
);
```
