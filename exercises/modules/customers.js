import arrayUtilities from './array_utilities.js';
import composition from './composition.js';
import customer from './customer.js';

const { filter, map, average } = arrayUtilities;
const { pipe } = composition;

/* ---------------------------------------------------------------- */

const selectBestCustomers = filter(customer.isBest);

const selectNewCustomers = filter(customer.isNew);

const selectBigSpenders = filter(customer.isBigSpender);

const selectBiggestPurchase = map(customer.getBiggestPurchase);

const getTopPurchases = pipe(selectBestCustomers, selectBiggestPurchase);

const getEmails = map(customer.getEmail);

const getNewCustomersEmails = pipe(selectNewCustomers, getEmails);

const getAverageOfTotal = map(customer.getPurchasesAverage);

/* ---------------------------------------------------------------- */

export default Object.freeze({
    selectBestCustomers,
    selectNewCustomers,
    selectBigSpenders,
    selectBiggestPurchase,
    getEmails,
    getTopPurchases,
    getNewCustomersEmails,
    getAverageOfTotal,
});
