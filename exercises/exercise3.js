import { isShoes, isSocks, getProductStock } from './modules/product.js';

import { filter, map, sum } from './modules/array_utilities.js';
import { pipe, fusionOrPredicates, inspect } from './modules/composition.js';

/* ---------------------------------------------------------------- */

const data = [
    { stock: 123, name: 'Aldo', type: 'shoes' },
    { stock: 452, name: 'Chic', type: 'perfume' },
    { stock: 739, name: 'Hollister', type: 'pants' },
    { stock: 342, name: 'Shirt', type: 'Issay Miyaki' },
    { stock: 142, name: 'Pinto', type: 'socks' },
];

const areShoesOrSocks = fusionOrPredicates(isShoes, isSocks);

const shoesAndSocksInventory = pipe(
    filter(areShoesOrSocks),
    inspect('after filter'),
    map(getProductStock),
    inspect('after getting stock'),
    sum,
);

console.log(shoesAndSocksInventory(data));

/* ---------------------------------------------------------------- */
