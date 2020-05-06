const productHover = (id) => {
    return {
        type: 'PRODUCT_HOVER',
        payload: id,
    }
};

const productLoseHover = () => {
    return {
        type: 'PRODUCT_LOSE_HOVER',
    }
};

export {
    productHover,
    productLoseHover
};