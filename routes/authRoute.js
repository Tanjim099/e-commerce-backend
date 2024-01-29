import express from "express"
import { forgotPassword, getUserProfile, logout, test, updateProfile, userLogin, userRegister } from "../controllers/authController.js";
import { isAdmin, requredSignIn } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//routing

//REGISTER || METHOD POST
router.post("/register", userRegister);

//LOGIN || METHOD POST
router.post("/login", userLogin);

router.get("/me/:uid", getUserProfile);

//FORGOT-PASSWORD || METHOD POST
router.post("/forgot-password", forgotPassword)

//LOGOUT || METHOD GET
router.get("/logout", logout)
//TEST
router.get("/test", requredSignIn, isAdmin, test);

//UPDATE PROFILE
router.put("/update-profile", requredSignIn, updateProfile)

export default router