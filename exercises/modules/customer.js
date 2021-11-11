import purchases from './purchases.js';
import composition from './composition.js';

const { pipe, fusionPredicates } = composition;
const { getCount, getBiggest, getAverageOfTotal, hasBigPurchase } = purchases;

/* ---------------------------------------------------------------- */

const getPurchases = (customer) => customer.purchases;
const getEmail = (customer) => customer.email;

const getPurchasesCount = pipe(getPurchases, getCount);
const getBiggestPurchase = pipe(getPurchases, getBiggest);
const getPurchasesAverage = pipe(getPurchases, getAverageOfTotal);

const hasSomeBigPurchase = pipe(getPurchases, hasBigPurchase);

const hasXPurchases = (x) => (customer) => getPurchasesCount(customer) === x;
const has1Purchase = hasXPurchases(1);

const hasXorMorePurchases = (x) => (customer) =>
    getPurchasesCount(customer) >= x;
const has2PurchasesOrMore = hasXorMorePurchases(2);
const has3PurchasesOrMore = hasXorMorePurchases(3);

const isNew = has1Purchase;
const isBest = has3PurchasesOrMore;
const isBigSpender = fusionPredicates(has2PurchasesOrMore, hasSomeBigPurchase);

/* ---------------------------------------------------------------- */

export default Object.freeze({
    getPurchases,
    getEmail,
    getPurchasesCount,
    getBiggestPurchase,
    getPurchasesAverage,
    isNew,
    isBest,
    isBigSpender,
});
