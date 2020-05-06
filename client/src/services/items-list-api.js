import CRUD_API from './crud-api'

export default class ItemsListApi extends CRUD_API {

    getItemsList() {
        return super.get('product')
            .then(res => res.data)
            .catch(err => err)
    }
};
