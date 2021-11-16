const getProductType = (product) => product.type;
const getProductStock = (product) => product.stock;

const isXProduct = (type) => (product) => getProductType(product) === type;

const isShoes = isXProduct('shoes');
const isSocks = isXProduct('socks');

export { getProductType, getProductStock, isShoes, isSocks };
