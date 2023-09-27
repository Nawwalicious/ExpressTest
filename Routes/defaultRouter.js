const express = require('express');
const router = express.Router();
const defaultHandler = require('../Controllers/defaultHandler');

router.get('/',defaultHandler.welcome);
router.get('/*',defaultHandler.doesNotExist);

module.exports=router;
