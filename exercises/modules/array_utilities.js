import { identity, pipe, inspect } from './composition.js';

import { isPositiveInteger } from './validators.js';

import {
    sumWithR,
    keepGreatestWithR,
    sequentialWindowsWithR,
} from './reducers.js';

import { randomIntFromInterval } from './math.js';

const getLastElement = (array) => array[array.length - 1];

const reduceWith = (reducer, init) => (array) => array.reduce(reducer, init);

const selectGreatest = (f, init) => reduceWith(keepGreatestWithR(f), init);

const sumWith = (f, init) => reduceWith(sumWithR(f), init);

const sum = sumWith(identity, 0);

const averageWith = (f) => (array) => sumWith(f, 0)(array) / array.length;

const average = averageWith(identity);

const windowsWith = (windowSize, jump = windowSize, f) => {
    if (!isPositiveInteger(windowSize))
        throw new Error("'subArrayLength' must be a positive integer");
    if (!isPositiveInteger(jump))
        throw new Error("'subArrayLength' must be a positive integer");
    return (array) => {
        const result = [];
        let index = 0;
        // no need to iterate over each element
        const length = array.length;
        while (index < length) {
            result.push(f(array.slice(index, index + windowSize)));
            index += jump;
        }
        return result;
    };
};

const chunks = (size) => windowsWith(size, size, identity);

const movingAverage = (size) => windowsWith(size, 1, average);

const filter = (predicate) => (array) => array.filter(predicate);

const some = (predicate) => (array) => array.some(predicate);

const map = (fn) => (array) => array.map(fn);

const flatN = (depth) => (array) => array.flat(depth);

const flat = flatN(Infinity);

const sortBy = (compare) => (array) => [...array].sort(compare);

const compareWith =
    (f, asc = true) =>
    (a, b) =>
        asc ? f(a) - f(b) : f(b) - f(a);

const getRandomElement = (array) => {
    const index = randomIntFromInterval(0, array.length - 1);
    return array[index];
};

export {
    average,
    averageWith,
    chunks,
    filter,
    flatN,
    flat,
    getLastElement,
    map,
    reduceWith,
    selectGreatest,
    movingAverage,
    some,
    sum,
    sumWith,
    windowsWith,
    sortBy,
    compareWith,
    getRandomElement,
};
