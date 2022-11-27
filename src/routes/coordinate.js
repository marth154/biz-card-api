const express = require("express");
const router = express.Router(); // router intégré au frameworkconst userCtrl = require('../controllers/user');
const coordCtrl = require("../controller/coordinate")
// routes CRUD disponibles
router.post("/", coordCtrl.createCoordinate);
router.get("/:id", coordCtrl.getCoordinate);

module.exports = router;
