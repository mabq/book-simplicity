import composition from './composition.js';
import reducer from './reducer.js';

const { identity } = composition;

/* ---------------------------------------------------------------- */

const reduceWith = (reducer, init) => (array) => array.reduce(reducer, init);

const sequentialWindowSlicer = (window, init = []) =>
    reduceWith(reducer.sequentialWindowSlicer(window), init);

const sequentialAverage = (f, init = []) =>
    reduceWith(reducer.sequentialAverage(f), init);

const selectGreatest = (f, init) => reduceWith(reducer.keepGreatest(f), init);

const sumWith = (f, init) => reduceWith(reducer.sum(f), init);

const sum = sumWith(identity, 0);

const averageWith = (f) => (array) => sumWith(f, 0)(array) / array.length;

const average = averageWith(identity);

const filter = (predicate) => (array) => array.filter(predicate);

const some = (predicate) => (array) => array.some(predicate);

const map = (fn) => (array) => array.map(fn);

export default Object.freeze({
    average,
    averageWith,
    filter,
    map,
    reduceWith,
    sequentialWindowSlicer,
    sequentialAverage,
    selectGreatest,
    some,
    sum,
    sumWith,
});

/* ---------------------------------------------------------------- */

// function cumulativeSequentialAverages(array) {
//     return array.reduce((acc, _, i) => {
//         acc.push(average(array.slice(0, i + 1)));
//         return acc;
//     }, []);
// }
