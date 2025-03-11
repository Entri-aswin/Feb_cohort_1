import e from "express";
import { authMentor } from "../middlewares/authMentor.js";
import { courseDetails, createCourse, getAllCourses } from "../controllers/courseControllers.js";
import { upload } from "../middlewares/multer.js";

const router = e.Router();

router.get("/courseList", getAllCourses);
router.get("/courseDetails/:courseId", courseDetails);
router.post("/create-course", authMentor, upload.single("image"), createCourse);
// router.get("/update-course",authMentor,)

//fetch courses based on mentor

//course deactivate

export { router as courseRouter };
