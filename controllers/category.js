const listCategory = require('../test-data/category');

exports.getListCategory =(req, res, next) => {
    res.send(listCategory);
};