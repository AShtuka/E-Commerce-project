import CRUD_API from './crud-api'

export default class CategoriesListApi extends CRUD_API {

    getCategoriesList() {
        return super.get('categories-list')
            .then(res => res.data)
            .catch(err => err)
    }
};
