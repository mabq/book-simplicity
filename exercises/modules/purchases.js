import { selectGreatest, some, averageWith } from './array_utilities.js';

import { getTotal, emptyPurchase, isBigPurchase } from './purchase.js';

const getCount = (purchases) => purchases.length;

const getBiggest = selectGreatest(getTotal, emptyPurchase);

// const getAverageOfTotal = pipe(getTotals, average); // this would create intermediary arrays
const getAverageOfTotal = averageWith(getTotal); // this does not

const hasBigPurchase = some(isBigPurchase);

export { getAverageOfTotal, getBiggest, getCount, hasBigPurchase };
