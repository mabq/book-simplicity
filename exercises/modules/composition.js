const identity = (x) => x;

const pipe =
    (...fns) =>
    (...args) =>
        fns.reduce((acc, fn) => [fn(...acc)], args)[0];

const inspect = (label) => (x) => {
    console.log(label);
    console.log(x);
    return x;
};

const fusionAndPredicates =
    (...fns) =>
    (elem) =>
        fns.every((fn) => fn(elem));

const fusionOrPredicates =
    (...fns) =>
    (elem) =>
        fns.some((fn) => fn(elem));

export { fusionAndPredicates, fusionOrPredicates, identity, inspect, pipe };
