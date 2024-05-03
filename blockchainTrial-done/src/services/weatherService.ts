import { storeStudentData } from "../helpers/helper.js";

export const storeStudentService = (student:StudentData): StudentData => {
  
storeStudentData(student).catch(console.error)
  // Return weather data
  return student;
};
