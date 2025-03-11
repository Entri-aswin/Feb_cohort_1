import e from "express";
import { authUser } from "../middlewares/authUser.js";
import { addCourseToCart, getCart, removeCourseFromCart } from "../controllers/cartControllers.js";

const router = e.Router();

//add to cart
router.post("/add-to-cart",authUser,addCourseToCart)

//remove from cart
router.delete("/remove-from-cart",authUser,removeCourseFromCart)

//clear cart

//get cart details
router.get("/get-cart-details",authUser,getCart)


export { router as cartRouter };
