import e from "express";
import { userLogin, userProfile, userSignup } from "../controllers/userControllers.js";

const router = e.Router();

//sign up
router.post("/signup",userSignup);

//login
router.put("/login",userLogin);

//profile
router.get("/profile",userProfile);

//profile-edit
router.put("/update");

//profile-deactivate
router.put("/deactivate");

//delete
router.delete("/delete-account");

//logout
router.get("/logout");

//password-forgot
//password-change
//address update

//check-user

export { router as userRouter };

