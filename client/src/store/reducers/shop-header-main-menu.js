const initialState = {
    appearance: false,
    hover: false
};

const ShopHeaderMainMenu = (state = initialState, action) => {

    switch (action.type) {
        case 'LIST_CATEGORY_SHOW' :
            return {
                appearance: true,
                hover: true
            };

        case 'LIST_CATEGORY_HIDDEN' :
            return {
                appearance: false,
                hover: false
            };

        case 'LIST_CATEGORY_LOST_HOVER' :
            return {
                appearance: true,
                hover: false
            };

        default: return state;
    }
};

export default ShopHeaderMainMenu;