const empty = { total: 0 };

const getTotal = (purchase) => purchase.total;

export default Object.freeze({
    empty,
    getTotal,
});
