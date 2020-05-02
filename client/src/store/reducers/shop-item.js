const initialState = {
    itemId: null,
    isHover: false
};

const ShopItem = (state = initialState, action) => {

    switch (action.type) {
        case 'SHOP_ITEM_HOVER' :
            return {
                itemId: action.payload,
                isHover: true
            };

        case 'SHOP_ITEM_LOSE_HOVER' :
            return {
                isHover: false,
                itemId: null
            };

        default: return state;
    }
};

export default ShopItem;