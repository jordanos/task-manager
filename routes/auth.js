const express = require("express");

const router = express.Router();

router.route("/login").post();

router.route("/logout").post();

module.exports = router;
