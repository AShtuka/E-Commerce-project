import CRUD_API from './crud-api'

export default class DBService extends CRUD_API {

    getData() {
        return super.get('')
            .then(res => res.data)
            .catch(err => err)
    }
};
