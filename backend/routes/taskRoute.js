const express = require("express");
const {
  createTask,
  getAllTasks,
  getTaskDetails,
  deleteTask,
  updateTask
} = require("../controllers/taskController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/tasks").get(getAllTasks);

router
  .route("/admin/task/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createTask);

router
  .route("/admin/task/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateTask)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteTask);

router.route("/task/:id").get(getTaskDetails);

module.exports = router;
