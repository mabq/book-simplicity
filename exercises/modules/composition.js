const identity = (x) => x;

const pipe =
    (...fns) =>
    (...args) =>
        fns.reduce((acc, fn) => [fn(...acc)], args)[0];

const fusionPredicates =
    (...fns) =>
    (elem) =>
        fns.every((fn) => fn(elem));

const inspect = (label) => (x) => {
    console.log(label);
    console.log(x);
    return x;
};

export { fusionPredicates, identity, inspect, pipe };
