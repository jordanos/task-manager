const express = require("express");
const {
  listAdmins,
  createAdmin,
  listUsers,
  listUserTasks,
  listTasks,
} = require("../controllers/adminController");

const router = express.Router();

router.route("").get(listAdmins).post(createAdmin);
router.route("/manage/users").get(listUsers);
router.route("/manage/tasks").get(listTasks);
router.route("/manage/users/:id/tasks").get(listUserTasks);

module.exports = router;
