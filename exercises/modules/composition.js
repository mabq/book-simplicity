const identity = (x) => x;

const pipe =
    (...fns) =>
    (...args) =>
        fns.reduce((acc, fn) => [fn(...acc)], args)[0];

const fusionPredicates =
    (...fns) =>
    (elem) =>
        fns.every((fn) => fn(elem));

const fusionSequences =
    (...fns) =>
    (elem) =>
        fns.reduce((acc, fn) => fn(acc), elem);

export default Object.freeze({
    identity,
    pipe,
    fusionPredicates,
    fusionSequences,
});
