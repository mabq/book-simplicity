import { filter, map, average } from './array_utilities.js';

import { pipe } from './composition.js';

import {
    isBest,
    isNew,
    isBigSpender,
    getBiggestPurchase,
    getEmail,
    getPurchasesAverage,
} from './customer.js';

const selectBestCustomers = filter(isBest);

const selectNewCustomers = filter(isNew);

const selectBigSpenders = filter(isBigSpender);

const selectBiggestPurchase = map(getBiggestPurchase);

const getTopPurchases = pipe(selectBestCustomers, selectBiggestPurchase);

const getEmails = map(getEmail);

const getNewCustomersEmails = pipe(selectNewCustomers, getEmails);

const getAverageOfTotal = map(getPurchasesAverage);

export {
    getAverageOfTotal,
    getEmails,
    getNewCustomersEmails,
    getTopPurchases,
    selectBestCustomers,
    selectBiggestPurchase,
    selectBigSpenders,
    selectNewCustomers,
};
