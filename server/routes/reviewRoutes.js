import e from "express";
import { authUser } from "../middlewares/authUser.js";
import { addReview, deleteReview, getAverageRating, getCourseReviews } from "../controllers/reviewControllers.js";

const router = e.Router();

//update review
//add review
router.post("/add-reivew",authUser,addReview)


//delete review
router.delete("/delete-review",authUser,deleteReview)

// get course reviews
router.get('/course-reviews',getCourseReviews)


// course avg rating
router.get("/avg-rating",getAverageRating)


// get course reviews by specific user


export { router as reviewRouter };
