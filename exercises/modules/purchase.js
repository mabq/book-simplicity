const emptyPurchase = { total: 0 };

const getTotal = (purchase) => purchase.total;

const isBigPurchase = (purchase) => getTotal(purchase) > 100;

export { emptyPurchase, getTotal, isBigPurchase };
