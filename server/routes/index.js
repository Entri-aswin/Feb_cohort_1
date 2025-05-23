import e from "express";
import {userRouter} from './userRoutes.js'
import { mentorRouter } from "./mentorRoutes.js";
import { courseRouter } from "./courseRoutes.js";
import { cartRouter } from "./cartRoutes.js";
import { reviewRouter } from "./reviewRoutes.js";
import { paymentRouter } from "./paymentRoutes.js";

const router = e.Router()



router.use("/user",userRouter)
router.use("/mentor",mentorRouter)
router.use("/course",courseRouter)
// admin
// courses
// cart
router.use("/cart",cartRouter)
router.use("/review",reviewRouter)
router.use("/payment",paymentRouter)
// payment




export {router as apiRouter}





