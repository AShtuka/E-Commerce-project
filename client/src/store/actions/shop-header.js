const listCategoryShow = () => {
    return {
        type: 'LIST_CATEGORY_SHOW'
    }
};

const listCategoryLostHover = () => {
    return {
        type: 'LIST_CATEGORY_LOST_HOVER'
    }
};

const listCategoryHidden = () => {
    return {
        type: 'LIST_CATEGORY_HIDDEN'
    }
};

const listCategoryOpen = () => {
    return {
        type: 'LIST_CATEGORY_OPEN'
    }
};

const mobileMenuOpen = () => {
    return {
        type: 'MOBILE_MENU_OPEN'
    }
};

const personalCabinetMenuOpen = () => {
    return {
        type: 'PERSONAL_CABINET_MENU_OPEN'
    }
};

export {
    listCategoryHidden,
    listCategoryShow,
    listCategoryLostHover,
    listCategoryOpen,
    mobileMenuOpen,
    personalCabinetMenuOpen,
};