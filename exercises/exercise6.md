### Exercise

A famous casino is suddenly faced with a sharp decline of their revenues. They decide to offer Texas hold'em also online. Can you help them by writing an algorithm that can rank poker hands?

Task:

Create a poker hand that has a method to compare itself to another poker hand:

```js
 PokerHand.prototype.compareWith = function(hand){...};
 ```

A poker hand has a constructor that accepts a string containing 5 cards:

```js
var hand = new PokerHand("KS 2H 5C JD TD");
```

The characteristics of the string of cards are:
- A space is used as card seperator
- Each card consists of two characters
- The first character is the value of the card, valid characters are:
2, 3, 4, 5, 6, 7, 8, 9, T(en), J(ack), Q(ueen), K(ing), A(ce)
- The second character represents the suit, valid characters are:
S(pades), H(earts), D(iamonds), C(lubs)

The result of your poker hand compare can be one of these 3 options:

```js
var Result =
  {
    "win": 1,
    "loss": 2,
    "tie": 3
  }
```

- Apply the Texas Hold'em rules for ranking the cards.
- There is no ranking for the suits.


### Solution

```js
const Result = { win: 1, loss: 2, tie: 3 };

const mapping = {
	T: 10,
	J: 11,
	Q: 12,
	K: 13,
	A: 14,
};

/**
 * Returns the number representation of a hand sorted
 *
 * @param  {string} hand
 */
const getNumbers = function(hand) {
	let numbs = hand.split(' ').map(val => {
		let num = val.split('')[0];
		if (mapping[num]) return mapping[num];
		return +num;
	});

	numbs = numbs.sort((a, b) => a - b);
	return numbs;
};

/**
 * Checks if a hand is straight
 *
 * @param  {string} hand
 */
const isStraight = function(hand) {
	const numbers = getNumbers(hand);

	let result = numbers.map((val, index, array) => array[index + 1] - val).slice(0, 4).every(val => val === 1);

	return { result: result, max: Math.max(...numbers) };
};

/**
 * Checks if a hand is flush
 *
 * @param  {string} hand
 */
const isFlush = function(hand) {
	const numbers = getNumbers(hand);
	const result = hand.split(' ').map(val => val.split('')[1]).every((val, i, array) => val === array[0]);

	return { result: result, max: Math.max(...numbers) };
};

/**
 * Checks if a hand is a straight flush
 *
 * @param  {string} hand
 */
const isStraightFlush = function(hand) {
	const numbers = getNumbers(hand);
	return { result: isStraight(hand).result && isFlush(hand).result, max: Math.max(...numbers) };
};

/**
 * Checks if a hand is a royal flush
 *
 * @param  {string} hand
 */
const isRoyalFlush = function(hand) {
	const isStraighFlush = isStraightFlush(hand);
	return { result: isStraighFlush.result && isStraighFlush.max === 14, max: 14 };
};

/**
 * Checks if there is any card that appears t times in the hand
 *
 * @param  {string} hand
 * @param  {number} t
 */
const times = function(hand, t) {
	const numbers = getNumbers(hand);
	const occurencies = {};

	numbers.forEach(num => {
		if (occurencies[num] === undefined) {
			occurencies[num] = 1;
		} else {
			occurencies[num] = occurencies[num] + 1;
		}
	});

	let result = false;
	let max;
	Object.keys(occurencies).forEach(key => {
		if (occurencies[key] === t) {
			result = true;
			max = +key;
		}
	});

	return { result: result, max: max };
};

/**
 * Checks if a hand is four-of-kind
 *
 * @param  {string} hand
 */
const isFourOfKind = function(hand) {
	return times(hand, 4);
};

/**
 * Checks if a hand is three-of-kind
 *
 * @param  {string} hand
 */
const isThreeOfKind = function(hand) {
	return times(hand, 3);
};

/**
 * Checks if a hand is full house
 *
 * @param  {string} hand
 */
const isFullHouse = function(hand) {
	const numbers = getNumbers(hand);
	const occurencies = {};

	numbers.forEach(num => {
		if (occurencies[num] === undefined) {
			occurencies[num] = 1;
		} else {
			occurencies[num] = occurencies[num] + 1;
		}
	});

	const keys = Object.keys(occurencies);
	let values = keys.map(key => occurencies[key]);
	if (values[0] === 2 && values[1] === 3) {
		return { result: true, max: +keys[1] };
	}
	if (values[0] === 3 && values[1] === 2) {
		return { result: true, max: +keys[0] };
	}
	return { result: false, max: -Infinity };
};

/**
 * Checks if a hand has two pairs
 *
 * @param  {string} hand
 */
const isTwoPair = function(hand) {
	const numbers = getNumbers(hand);
	const occurencies = {};

	numbers.forEach(num => {
		if (occurencies[num] === undefined) {
			occurencies[num] = 1;
		} else {
			occurencies[num] = occurencies[num] + 1;
		}
	});

	let twopairs = [];

	Object.keys(occurencies).forEach(key => {
		if (occurencies[key] === 2) twopairs.push(key);
	});
	return { result: twopairs.length === 2, max: Math.max(...twopairs) };
};

/**
 * Checks if a hand has single pair
 *
 * @param  {string} hand
 */
const isSinglePair = function(hand) {
	const numbers = getNumbers(hand);
	const occurencies = {};

	numbers.forEach(num => {
		if (occurencies[num] === undefined) {
			occurencies[num] = 1;
		} else {
			occurencies[num] = occurencies[num] + 1;
		}
	});

	let pair = undefined;
	let max = -Infinity;
	Object.keys(occurencies).forEach(key => {
		if (occurencies[key] === 2) {
			pair = key;
		} else {
			max = Math.max(key, max);
		}
	});

	return { result: Boolean(pair), max: max };
};

/**
 * Calculate the weight of its hand
 *
 * The weight of its hand is the weight of the ranking hand + the maximum number in the hand
 *
 * @param  {string} hand
 */
const getWeight = function(hand) {
	if (isRoyalFlush(hand).result) return Infinity;
	else if (isStraightFlush(hand).result) return 1000 + isStraightFlush(hand).max;
	else if (isFourOfKind(hand).result) return 900 + isFourOfKind(hand).max;
	else if (isFullHouse(hand).result) return 800 + isFullHouse(hand).max;
	else if (isFlush(hand).result) return 700 + isFlush(hand).max;
	else if (isStraight(hand).result) return 600 + isStraight(hand).max;
	else if (isThreeOfKind(hand).result) return 500 + isThreeOfKind(hand).max;
	else if (isTwoPair(hand).result) return 400 + isTwoPair(hand).max;
	else if (isSinglePair(hand).result) return 300;
	else return Math.max(...getNumbers(hand));
};


function PokerHand(hand) {
	this.cards = hand;
}

PokerHand.prototype.compareWith = function(hand) {
	const ourWeight = getWeight(this.cards);
	const opponentWeight = getWeight(hand.cards);

	if (ourWeight > opponentWeight) return Result.win;
	else if (ourWeight < opponentWeight) return Result.loss;
	else {
		const ourNumbers = getNumbers(this.cards);
		const opponentNumbers = getNumbers(hand.cards);

		// If the weights are equal check for the highest card
		let j = 5;
		while (j) {
			if (ourNumbers[j - 1] > opponentNumbers[j - 1]) return Result.win;
			else if (opponentNumbers[j - 1] > ourNumbers[j - 1]) return Result.loss;
			j--;
		}
		return Result.tie;
	}
};
```