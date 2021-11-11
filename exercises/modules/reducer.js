const sum = (f) => (acc, elem) => acc + f(elem);

const keepGreatest = (f) => (acc, elem) => {
    return f(elem) > f(acc) ? elem : acc;
};

const sequentialWindowSlicer = (window) => (acc, _, i, array) => {
    acc.push(array.slice(i, i + window));
    return acc;
};

const sequentialAverage = (f) => {
    let sum = 0;
    let count = 0;
    return (acc, e) => {
        sum += f(e);
        count += 1;
        acc.push(sum / count);
        return acc;
    };
};

export default Object.freeze({
    sequentialWindowSlicer,
    sequentialAverage,
    sum,
    keepGreatest,
});
