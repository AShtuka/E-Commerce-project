const initialState = {
    isCategoriesOpen: false,
    isMenuOpen: false
};

const ShopHeaderMobileMenu = (state = initialState, action) => {

    switch (action.type) {

        case 'LIST_CATEGORY_OPEN' :
            return {
                ...state,
                isCategoriesOpen: !state.isCategoriesOpen
            };

        case 'MOBILE_MENU_OPEN' :
            return {
                ...state,
                isMenuOpen: !state.isMenuOpen
            };

        default: return state;
    }
};

export default ShopHeaderMobileMenu;