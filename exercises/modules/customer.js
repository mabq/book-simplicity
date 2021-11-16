import { pipe, fusionAndPredicates } from './composition.js';

import {
    getCount,
    getBiggest,
    getAverageOfTotal,
    hasBigPurchase,
} from './purchases.js';

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
const isBigSpender = fusionAndPredicates(
    has2PurchasesOrMore,
    hasSomeBigPurchase,
);

export {
    getBiggestPurchase,
    getEmail,
    getPurchases,
    getPurchasesAverage,
    getPurchasesCount,
    isBest,
    isBigSpender,
    isNew,
};
