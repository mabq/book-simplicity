import arrayUtilities from './array_utilities.js';
import pipe from './pipe.js';
import customer from './customer.js';

const { filter, map } = arrayUtilities;

/* ---------------------------------------------------------------- */

const selectBestCustomers = filter(customer.isBest);

const selectNewCustomers = filter(customer.isNew);

const selectBiggestPurchase = map(customer.getBiggestPurchase);

const getEmails = map(customer.getEmail);

const topPurchases = pipe(selectBestCustomers, selectBiggestPurchase);

const getNewCustomersEmails = pipe(selectNewCustomers, getEmails);

/* ---------------------------------------------------------------- */

export default Object.freeze({
    selectBestCustomers,
    selectNewCustomers,
    selectBiggestPurchase,
    getEmails,
    topPurchases,
    getNewCustomersEmails,
});
