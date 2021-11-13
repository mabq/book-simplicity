import {
    getTopPurchases,
    getNewCustomersEmails,
    selectBigSpenders,
    getAverageOfTotal,
} from './modules/customers.js';

import { customers } from './data.js';

/* ---------------------------------------------------------------- */

console.log(getTopPurchases(customers));
console.log(getNewCustomersEmails(customers));
console.log(selectBigSpenders(customers));
console.log(getAverageOfTotal(customers));
