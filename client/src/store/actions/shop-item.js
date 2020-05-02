const shopItemHover = (id) => {
    return {
        type: 'SHOP_ITEM_HOVER',
        payload: id,
    }
};

const shopItemLoseHover = () => {
    return {
        type: 'SHOP_ITEM_LOSE_HOVER',
    }
};

export {
    shopItemHover,
    shopItemLoseHover
};