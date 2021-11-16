const objectSet = (o, prop, value) => {
    return Object.assign({}, o, { [prop]: value });
};

export { objectSet };
