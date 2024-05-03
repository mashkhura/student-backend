import express from "express";
import studentRoute from "./routes/studentRoute.js";
import cors from "cors";
import bodyParser from 'body-parser';

// We will create an express app
const app = express();

// The port that the express server will listen on
const PORT = 3001;

const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "30mb", extended: true }));


app.use(express.json());


app.use("/student", studentRoute);

// Start the express server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
