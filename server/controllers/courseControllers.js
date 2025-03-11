import { cloudinaryInstance } from "../config/cloudinary.js";
import { Course } from "../models/courseModel.js";

export const getAllCourses = async (req, res, next) => {
    try {
        const courseList = await Course.find().select("-mentor -syllabus -demoVideos");

        res.json({ data: courseList, message: "user autherized" });
    } catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message || "Internal server" });
    }
};

export const courseDetails = async (req, res, next) => {
    try {
        const { courseId } = req.params;

        const courseDetails = await Course.findById(courseId).populate("mentor");
        // const courseReview = await Review.findById(courseId);

        res.json({ data: courseDetails, message: "user autherized" });
    } catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message || "Internal server" });
    }
};

export const createCourse = async (req, res, next) => {
    try {
        const { title, description, price, duration, demoVideos, syllabus,  mentor } = req.body;

        const mentorId = req.user.id;

        // console.log(req.file,'======req.file');

        const cloudinaryRes = await cloudinaryInstance.uploader.upload(req.file.path);
        // console.log("cloudinaryResponse=====", cloudinaryRes);

        const newCourse = new Course({
            title,
            description,
            price,
            duration,
            demoVideos,
            syllabus,
            image: cloudinaryRes.url,
            mentor: mentorId,
        });
        newCourse.save();

        res.json({ data: newCourse, message: "course created successfully" });
    } catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message || "Internal server" });
    }
};
