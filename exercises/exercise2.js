import { chunks, movingAverage } from './modules/array_utilities.js';

import { pipe } from './modules/composition.js';

/* ---------------------------------------------------------------- */

const myArray = [1, 2, 3, 4, 5];
const window = 4;

console.log(chunks(window)(myArray));
console.log(movingAverage(window)(myArray));

/* ---------------------------------------------------------------- */
