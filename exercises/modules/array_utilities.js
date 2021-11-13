import { identity, pipe, inspect } from './composition.js';
import { isPositiveInteger } from './validators.js';

import {
    sumWithR,
    keepGreatestWithR,
    sequentialWindowsWithR,
} from './reducers.js';

const getLastElement = (array) => array[array.length - 1];

const reduceWith = (reducer, init) => (array) => array.reduce(reducer, init);

const selectGreatest = (f, init) => reduceWith(keepGreatestWithR(f), init);

const sumWith = (f, init) => reduceWith(sumWithR(f), init);

const sum = sumWith(identity, 0);

const averageWith = (f) => (array) => sumWith(f, 0)(array) / array.length;

const average = averageWith(identity);

const sequentialWindows = (window) =>
    reduceWith(sequentialWindowsWithR(window, identity), []);

const movingAverage = (window) =>
    reduceWith(sequentialWindowsWithR(window, average), []);

const chunksWith = (f) => (size) => (array) => {
    // a manual loop is much faster because there is no need to iterate over
    // each element of the array
    if (!isPositiveInteger(size)) {
        throw new Error("'size' must be a positive integer");
    }
    const result = [];
    const length = array.length;
    for (let i = 0; i < length; i += size) {
        result.push(f(array.slice(i, i + size)));
    }
    return result;
};

const chunks = chunksWith(identity);

const chunksAverage = chunksWith(average);

const filter = (predicate) => (array) => array.filter(predicate);

const some = (predicate) => (array) => array.some(predicate);

const map = (fn) => (array) => array.map(fn);

const flatN = (depth) => (array) => array.flat(depth);

const flat = flatN(Infinity);

export {
    average,
    averageWith,
    chunks,
    chunksAverage,
    chunksWith,
    filter,
    flatN,
    flat,
    getLastElement,
    map,
    reduceWith,
    selectGreatest,
    sequentialWindows,
    movingAverage,
    some,
    sum,
    sumWith,
};
