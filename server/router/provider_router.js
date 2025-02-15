// import express from "express"
// import {home,register,login,pro_user} from "../controllers/provider-controller.js"
// import { signupSchema, loginSchema } from "../validator/provider-validator.js"
// import { validate } from "../middlewares/validate-middleware.js";
// import { proMiddleware } from "../middlewares/pro-middleware.js";
// const provider_router=express.Router();

// router.route("/").get(home);
// router.route("/register").post(validate(signupSchema),register);
// router.route("/login").post(validate(loginSchema),login);
// router.route("/pro_user").get(proMiddleware,pro_user);

// 

import express from "express";
import { registerProvider, loginProvider, getProviderProfile } from "../controllers/provider-controller.js";
import { authMiddleware } from "../middlewares/auth-middleware.js";

 const provider_router=express.Router();

provider_router.post("/register", registerProvider);
provider_router.post("/login", loginProvider);
provider_router.get("/profile", authMiddleware, getProviderProfile);
export { provider_router }; 
