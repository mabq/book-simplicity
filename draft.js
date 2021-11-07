const arrayUtilities = Object.freeze({
    selectGreatest: (array, init, f) => {
        return array.reduce((biggerSoFar, elem) => {
            return f(elem) > f(biggerSoFar) ? elem : biggerSoFar;
        }, init);
    },
    filter: (predicate) => (array) => array.filter(predicate),
});

const pipe =
    (...fns) =>
    (...args) =>
        fns.reduce((acc, fn) => [fn(...acc)], args)[0];

const purchase = Object.freeze({
    empty: { total: 0 },
    total: (purchase) => purchase.total,
});

const purchases = Object.freeze({
    count: (purchases) => purchases.length,
    biggest: (purchases) =>
        arrayUtilities.selectGreatest(
            purchases,
            purchase.empty,
            purchase.total,
        ),
});

const customer = Object.freeze({
    biggestPurchase: (customer) => purchases.biggest(customer.purchases),
    isBest: (customer) => purchases.count(customer.purchases) >= 3,
});

const customers = Object.freeze({
    selectTop: arrayUtilities.filter(customer.isBest),
    biggestPurchase: (customers) => customers.map(customer.biggestPurchase),
});

const topCustomersBiggestPurchase = pipe(
    customers.selectTop,
    customers.biggestPurchase,
);

/* ---------------------------------------------------------------- */

const customersData = [
    {
        name: 'Eduardo',
        purchases: [
            {
                items: 100000,
                total: 5,
            },
        ],
    },
    {
        name: 'Jonathan',
        purchases: [
            {
                items: 1,
                total: 500,
            },
            {
                items: 1,
                total: 800,
            },
            {
                items: 1,
                total: 100,
            },
        ],
    },
    {
        name: 'Mery',
        purchases: [
            {
                items: 1,
                total: 1000,
            },
            {
                items: 1,
                total: 100000,
            },
        ],
    },
    {
        name: 'Juanmar',
        purchases: [
            {
                items: 1,
                total: 3800,
            },
            {
                items: 1,
                total: 40,
            },
            {
                items: 1,
                total: 150,
            },
            {
                items: 1,
                total: 5,
            },
            {
                items: 1,
                total: 890,
            },
        ],
    },
    {
        name: 'Josema',
        purchases: [
            {
                items: 1,
                total: 2500,
            },
            {
                items: 1,
                total: 400000,
            },
            {
                items: 1,
                total: 150,
            },
        ],
    },
];

console.log(topCustomersBiggestPurchase(customersData));
