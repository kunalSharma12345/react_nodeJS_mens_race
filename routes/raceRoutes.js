const express = require('express');
const { addRecord } = require('../controllers/data');
const app= express();

const router = express.Router();

router.route('/add-mens').post(addRecord);

module.exports=router;

