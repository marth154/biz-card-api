const express = require("express");
const router = express.Router(); // router intégré au frameworkconst userCtrl = require('../controllers/user');
const userCtrl = require("../controller/user");
// routes CRUD disponibles
router.post("/auth", userCtrl.authentification);
router.get("/:id", userCtrl.getUserId)

module.exports = router;
