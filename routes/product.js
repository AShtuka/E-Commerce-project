const express = require("express");
const router = express.Router();

const {
    getListProduct
} = require('../controllers/product');

router.get('/', getListProduct);

module.exports = router;