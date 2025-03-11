import e from "express";
import { checkMentor, mentorLogin, mentorLogout, mentorProfile, mentorSignup } from "../controllers/mentorControllers.js";
import { authMentor } from "../middlewares/authMentor.js";

const router = e.Router();

//sign up
router.post("/signup",mentorSignup);

//login
router.put("/login",mentorLogin);

//profile
router.get("/profile",authMentor,mentorProfile);

//profile-edit
router.put("/update");

//profile-deactivate
router.put("/deactivate");

//delete
router.delete("/delete-account");

//logout
router.get("/logout",mentorLogout);

//password-forgot
//password-change
//address update

//check-user
router.get("/check-mentor",authMentor,checkMentor)

export { router as mentorRouter };
