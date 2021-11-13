const sumWithR = (f) => (acc, elem) => acc + f(elem);

const keepGreatestWithR = (f) => (acc, elem) => {
    return f(elem) > f(acc) ? elem : acc;
};

const sequentialWindowsWithR = (window, f) => (acc, _, index, array) => {
    acc.push(f(array.slice(index, index + window)));
    return acc;
};

if (false) {
    // this is an example of when functional iterators are not the best
    // option, 'chunksWith' in the 'arrays_utilities' module is much
    // faster and actually simpler to read.
    // when you do not need to iterate through each element, use a manual
    // loop instead
    const sectionWindowsWithR = (window, f) => (acc, _, index, array) => {
        index += 1;
        if (index % window === 0) {
            acc.push(f(array.slice(index - window, index)));
        } else if (index === array.length) {
            acc.push(f(array.slice(index - (index % window))));
        }
        return acc;
    };
}

export { keepGreatestWithR, sequentialWindowsWithR, sumWithR };
