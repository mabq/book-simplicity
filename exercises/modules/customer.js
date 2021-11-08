import purchases from './purchases.js';
import pipe from './pipe.js';

/* ---------------------------------------------------------------- */

const getPurchases = (customer) => customer.purchases;
const getEmail = (customer) => customer.email;

const getPurchasesCount = pipe(getPurchases, purchases.getCount);
const getBiggestPurchase = pipe(getPurchases, purchases.getBiggest);

const hasXPurchases = (x) => (customer) => getPurchasesCount(customer) === x;
const hasXorMorePurchases = (x) => (customer) =>
    getPurchasesCount(customer) >= x;

const isNew = hasXPurchases(1);
const isBest = hasXorMorePurchases(3);

/* ---------------------------------------------------------------- */

export default Object.freeze({
    getPurchases,
    getEmail,
    getPurchasesCount,
    getBiggestPurchase,
    hasXPurchases,
    hasXorMorePurchases,
    isNew,
    isBest,
});
