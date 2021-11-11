import customers from './modules/customers.js';
import customerData from './data.js';

console.log(customers.getTopPurchases(customerData));
console.log(customers.getNewCustomersEmails(customerData));
console.log(customers.selectBigSpenders(customerData));
console.log(customers.getAverageOfTotal(customerData));
