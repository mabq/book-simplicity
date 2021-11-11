import arrayUtilities from './array_utilities.js';
import purchase from './purchase.js';

const { selectGreatest, some, averageWith } = arrayUtilities;

/* ---------------------------------------------------------------- */

const getCount = (purchases) => purchases.length;

const getBiggest = selectGreatest(purchase.getTotal, purchase.empty);

// const getAverageOfTotal = pipe(getTotals, average); // this would create intermediary arrays
const getAverageOfTotal = averageWith(purchase.getTotal); // this does not

const hasBigPurchase = some(purchase.isBigPurchase);

export default Object.freeze({
    getCount,
    getBiggest,
    getAverageOfTotal,
    hasBigPurchase,
});
