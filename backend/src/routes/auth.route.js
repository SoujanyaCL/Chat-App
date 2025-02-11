import express from "express";
import { checkAuth, login, logout, signup, updateProfile } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

// router.post("/signup", (req,res) => {
//     res.send("signup route");
// });

// router.post("/login", (req,res) => {
//     res.send("login route");
// });

// router.post("/logout", (req,res) => {
//     res.send("logout route");
// });

router.put("/update-profile", protectRoute, updateProfile);

router.get("/check", protectRoute, checkAuth);

export default router;
