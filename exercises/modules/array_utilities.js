const selectGreatest = (init, f) => {
    return (array) => {
        return array.reduce((biggerSoFar, elem) => {
            return f(elem) > f(biggerSoFar) ? elem : biggerSoFar;
        }, init);
    };
};

const filter = (predicate) => (array) => array.filter(predicate);

const map = (fn) => (array) => array.map(fn);

export default Object.freeze({
    selectGreatest,
    filter,
    map,
});
