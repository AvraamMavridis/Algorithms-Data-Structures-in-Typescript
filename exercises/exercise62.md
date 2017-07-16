## Exercise

The Grinch is given the job of partitioning 2n players into two teams of n players each. Each player has a numerical rating that measures how good he/she is at the game. He seeks to divide the players as unfairly as possible, so as to create the biggest possible talent imbalance between team A and team B. Show how the Grinch can do the job in O(n log n) time.

## Solution

```ts
type UnfairlyBalancedTeams = {
  teamA: Array<Player>;
  teamB: Array<Player>;
};

/**
 * Player
 *
 * @class Player
 */
class Player {
  talent: number;
  constructor(talent: number) {
    this.talent = talent;
  }

  /**
   * Helper to compare
   *
   * @returns
   * @memberof Player
   */
  valueOf() {
    return this.talent;
  }
}

/**
 * Team Factory creates unfairly balanced teams
 *
 * @class TeamFactory
 */
class TeamFactory {
  players: Array<Player>;

  /**
   * Creates an instance of TeamFactory.
   * @param {Array<Player>} players
   * @memberof TeamFactory
   */
  constructor(players: Array<Player>) {
    this.players = players;
  }

  private sortPlayers(): Array<Player> {
    /**
     * Merge function from merge-sort
     *
     * @param {Array<Player>} arr1
     * @param {Array<Player>} arr2
     * @returns {Array<Player>}
     */
    const merge = function(arr1: Array<Player>, arr2: Array<Player>): Array<Player> {
      let newArr = [];
      while (arr1.length && arr2.length) {
        if (arr1[0] > arr2[0]) {
          newArr.push(arr2.shift());
        } else {
          newArr.push(arr1.shift());
        }
      }

      if (arr1.length) {
        newArr = newArr.concat(arr1);
      }

      if (arr2.length) {
        newArr = newArr.concat(arr2);
      }

      return newArr;
    };

    /**
     * Merge sort implementation
     *
     * @param {any} players
     * @returns {Array<Player>}
     */
    const mergeSort = function(players): Array<Player> {
      if (players.length === 1) return players;

      const medium = Math.floor(players.length / 2);
      let arr1 = players.slice(0, medium);
      let arr2 = players.slice(medium, players.length);

      arr1 = mergeSort(arr1);
      arr2 = mergeSort(arr2);

      return merge(arr1, arr2);
    };

    this.players = mergeSort(this.players);
    return this.players;
  }

  /**
   * Create two unfairly balanced teams
   *
   * @returns
   * @memberof TeamFactory
   */
  getTeams(): UnfairlyBalancedTeams {
    this.sortPlayers();
    const m = Math.floor(this.players.length / 2);
    return {
      teamA: this.players.slice(0, m),
      teamB: this.players.slice(m)
    };
  }
}

const p1 = new Player(0.2);
const p2 = new Player(0.1);
const p3 = new Player(0.3);
const p4 = new Player(0.7);
const p5 = new Player(0.1);
const p6 = new Player(0.9);
const p7 = new Player(0.87);
const p8 = new Player(1);

const tm = new TeamFactory([p1, p2, p3, p4, p5, p6, p7, p8]);

console.log(tm.getTeams());
```
