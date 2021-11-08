import arrayUtilities from './array_utilities.js';
import purchase from './purchase.js';

const getCount = (purchases) => purchases.length;

const getBiggest = arrayUtilities.selectGreatest(
    purchase.empty,
    purchase.getTotal,
);

export default Object.freeze({
    getCount,
    getBiggest,
});
