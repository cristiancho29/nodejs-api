"use strict";

const router = require("express").Router();
const controller = require("./../controllers/messages");

router.param("id", controller.params);

router.route("/")
    .get(controller.all);
    
module.exports = router;