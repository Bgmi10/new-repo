const express = require("express");
const {
  createCourse,
  getAllCourses,
  getCourseDetails,
  deleteCourse,
  updateCourse
} = require("../controllers/courseController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/courses").get(getAllCourses);

router
  .route("/admin/course/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createCourse);

router
  .route("/admin/course/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateCourse)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteCourse);

router.route("/course/:id").get(getCourseDetails);

module.exports = router;
