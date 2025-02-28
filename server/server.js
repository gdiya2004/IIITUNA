import dotenv from 'dotenv';
dotenv.config();

// console.log(process.env.MONGODB_URI)
import cors from "cors";
import inquiryRoutes from "./router/inquiryRoutes.js";
import express from "express"
import {router_} from "./router/auth-router.js"
import {contactRoute} from "./router/contact-router.js"
import {service_router} from "./router/service-router.js"
// import { admin_router } from "./router/admin-router.js";
import { provider_router } from "./router/provider_router.js";


import { admin_router } from "./router/admin-router.js";
import { connectDb } from "./utils/db.js";
import { errorMiddleWare } from "./middlewares/error-middleware.js";
const app=express();

app.use(cors({
    origin: ["http://localhost:3000", "http://localhost:5173"], 
    credentials: true,
}));

 
//express middleware that parses incoming req bodies with JSON payloads
//it is imp to place it before routes to handle json data from request body
app.use(express.json());
app.use("/api", inquiryRoutes);
app.use("/api/auth",router_);
app.use("/api/form",contactRoute);
app.use("/api/admin",admin_router);
app.use("/api/data",service_router);
app.use("/api/provider",provider_router);
// app.use("/api/admin",admin_router);

app.use(errorMiddleWare);

connectDb().then(()=>{
    const PORT=5004;
    app.listen(PORT,()=>{
    console.log("server")
})
})