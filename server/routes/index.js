import e from "express";
import {userRouter} from './userRoutes.js'
import { mentorRouter } from "./mentorRoutes.js";

const router = e.Router()



router.use("/user",userRouter)
router.use("/mentor",mentorRouter)
// admin
// courses
// cart
// payment




export {router as apiRouter}





