const listProduct = require('../test-data/product');

exports.getListProduct =(req, res, next) => {
    res.send(listProduct);
};