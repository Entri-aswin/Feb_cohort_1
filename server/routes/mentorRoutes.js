import e from "express";

const router = e.Router();

//sign up
router.post("/signup");

//login
router.put("/login");

//profile
router.get("/profile");

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

export { router as mentorRouter };
