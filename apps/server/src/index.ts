import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT;

import { connectToDatabase } from "./database/connection.js";

// LLM Routes
import responseRoutes from "./routes/response.routes.js";
app.use("/api/v1/response", responseRoutes);

// Signup Routes
import signupRouter from "./routes/signup.routes.js";
app.use("/api/v1/signup", signupRouter);

connectToDatabase();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
