import e from "express";
import { userLogin, userLogout, userProfieUpdate, userProfile, userSignup } from "../controllers/userControllers.js";
import { authUser } from "../middlewares/authUser.js";
import { authMentor } from "../middlewares/authMentor.js";
import { courseDetails, createCourse, getAllCourses } from "../controllers/courseControllers.js";

const router = e.Router();

router.get("/courseList",getAllCourses)
router.get("/courseDetails/:courseId",courseDetails)
router.post("/create-course",authUser,createCourse)
// router.get("/update-course",authMentor,)

export { router as courseRouter };
