import { pipe, inspect } from './modules/composition.js';

import { objectSet } from './modules/copy_on_write.js';

import {
    sortBy,
    compareWith,
    getRandomElement,
    map,
    reduceWith,
} from './modules/array_utilities.js';

import { randomIntFromInterval } from './modules/math.js';

/* ---------------------------------------------------------------- */

// Pretend there is some real logic here...

const recommendPosition = (name) =>
    getRandomElement(['pitcher', 'catcher', 'thinker', 'cheerer']);

const scorePlayer = (name, position) => randomIntFromInterval(0, 100);

/* ---------------------------------------------------------------- */

const sortByScoreDesc = compareWith((o) => o.score, false);

/* ---------------------------------------------------------------- */

const recommendations = map((name) => ({
    name,
    position: recommendPosition(name),
}));

const evaluations = map((recommendation) =>
    objectSet(
        recommendation,
        'score',
        scorePlayer(recommendation.name, recommendation.position),
    ),
);

const sortByScore = sortBy(sortByScoreDesc);

const roster = reduceWith((acc, evaluation) => {
    if (!acc[evaluation.position]) {
        acc[evaluation.position] = evaluation.name;
    }
    return acc;
}, {});

const selection = pipe(
    recommendations,
    evaluations,
    inspect('Before sort'),
    sortByScore,
    inspect('After sort'),
    roster,
);

/* ---------------------------------------------------------------- */

const employeeNames = [
    'John',
    'Harry',
    'Jane',
    'Manu',
    'Juanmar',
    'Josema',
    'Polita',
    'Luis',
    'Mery',
    'Flaca',
    'Lucio',
];

console.log(selection(employeeNames));
