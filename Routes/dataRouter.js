const express = require('express');
const router = express.Router();
const dataHandler = require('../Controllers/dataHandler');

router.get('/data',dataHandler.dataPrinter);
router.get('/data/:id',dataHandler.dataPrinterById);

module.exports=router;