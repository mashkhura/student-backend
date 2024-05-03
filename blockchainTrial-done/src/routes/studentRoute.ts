import express from "express";
import { storeStudentData } from "../controllers/studentController.js";


// We will create a router object
const router = express.Router();

// here we will accept the request for storing 
router.get("/",  ()=>{
console.log("test Route worked!")
});
router.post("/",  storeStudentData);

// We will export the router
export default router;
