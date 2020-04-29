import axios from 'axios';

export default class Base {

    getUrl(path) {
        return `/api/${path}`;
    }

    get(url) {
        return axios
            .get(this.getUrl(url));
    }

    post(url, data){
        return axios.post(this.getUrl(url), data);
    }

    put(url, data){
        return axios.put(this.getUrl(url), data);
    }

    delete(url, data){
        return axios.delete(this.getUrl(url), data);
    }
};