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

        res.json({ data:  courseDetails, message: "user autherized" });
    } catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message || "Internal server" });
    }
};

export const createCourse = async (req, res, next) => {
    try {
        const { title, description, price, duration, demoVideos, syllabus, image, mentor } = req.body;

        const mentorId = req.user.id

        const newCourse = new Course({ title, description, price, duration, demoVideos, syllabus, image, mentor : mentorId });
        newCourse.save();

        res.json({data:newCourse, message:"course created successfully"})

        
    } catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message || "Internal server" });
    }
};
