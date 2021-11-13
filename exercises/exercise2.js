import {
    movingAverage,
    chunks,
    chunksAverage,
    sequentialWindows,
} from './modules/array_utilities.js';

import { pipe } from './modules/composition.js';

/* ---------------------------------------------------------------- */

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const window = 3;

// console.log(chunks(window)(myArray));
console.log(chunksAverage(window)(myArray));

/* ---------------------------------------------------------------- */

const chunkWith =
    (f) =>
    (size, jump = size) =>
    (array) => {
        const result = [];
        const length = array.length;
        for (let i = 0; i < length; i += jump) {
            result.push(f(array.slice(i, i + size)));
        }
        return result;
    };

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const identity = (x) => x;

const chunk = chunkWith(identity);

console.log(chunk(3, 1)(arr));
