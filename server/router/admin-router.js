import express from  "express"
import {getAllUsers} from "../controllers/admin-controller.js"
import {getAllContacts,deleteUserById,getUserById} from "../controllers/admin-controller.js"
import {authMiddleware} from "../middlewares/auth-middleware.js"
import { adminMiddleware } from "../middlewares/admin-middleware.js"
import {deleteUserByContact} from "../controllers/admin-controller.js"
const router=express.Router();
router.route("/users").get(authMiddleware,adminMiddleware,getAllUsers)
router.route("/users/:id").get(authMiddleware,adminMiddleware,getUserById)
router.route("/users/delete/:id").delete(authMiddleware,adminMiddleware,deleteUserById)
// router.route("/users/update/:id").patch(authMiddleware,adminMiddleware,updateUserById)

router.route("/contact").get(authMiddleware,getAllContacts)
router.route("/contact/delete/:id").delete(authMiddleware,adminMiddleware,deleteUserByContact)
export const admin_router=router;