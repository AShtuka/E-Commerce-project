const express = require("express");
const router = express.Router();

const {
   getListCategory
} = require('../controllers/category');

router.get('/', getListCategory);

module.exports = router;