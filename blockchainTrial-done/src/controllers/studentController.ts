import { Request, Response } from "express";
import {storeStudentService} from "../services/weatherService.js";
import { validationResult } from "express-validator";

/**
 * Gets the weather data for a city
 * @param req the request object
 * @param res the response object
 */
export const storeStudentData = async (req: Request, res: Response) => {
  
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.error("Validation error", errors.mapped());
    res.status(400).json({ errors: errors.array() });
    return;
  }

  try {
    // Get the student data from the request body
    const { body: student } = req;
    console.log(student);
    // here we are storting the student data
     const storedStudent = storeStudentService(student);
     res.status(200).json(storedStudent);
    }
   catch (error) {
    // If there is an error, we will log it and send a 500 status code
    res.status(500).send("Error in storing Student data");
  }
};
