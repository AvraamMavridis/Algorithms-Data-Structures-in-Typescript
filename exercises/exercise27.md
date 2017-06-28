## Exercise

Given an array of events `[start, end, label]` which are sorted by starting time, write a function that finds the conflicted events.

## Solution

```js
const events = [
  [2, 5, 'A'],
  [5, 8, 'B'],
  [9, 10, 'C'],
  [11, 15, 'D'],
  [12, 16, 'E'],
  [13, 15, 'M'],
  [17, 20, 'N'],
  [18, 21, 'T'],
  [19, 22, 'O'],
];

const findConflicts = function(events) {
  if (!events && !events.length) throw Error('There are not events');
  let confictedEvents = [];
  let tempconflicts = [events[0][2]];
  let end = events[0][1];

  for (let i = 1; i < events.length; i++) {
    if (events[i][0] >= end) {
      // no-conflict
      if (tempconflicts.length > 1) {
        confictedEvents = confictedEvents.concat(tempconflicts);
      }
      tempconflicts = [];
    }
    end = Math.max(events[i][1], end);
    tempconflicts.push(events[i][2]);
  }

  if (tempconflicts.length > 1) {
    confictedEvents = confictedEvents.concat(tempconflicts);
  }

  return confictedEvents;
};

console.assert(
  findConflicts(events).toString() === 'D,E,M,N,T,O',
  'Wrong implementation'
);
```
