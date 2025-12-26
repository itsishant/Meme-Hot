import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

const PORT = 51733;

import { connectToDatabase } from "./database/connection.js";
connectToDatabase();

// LLM Routes
import responseRoutes from "./routes/response.routes.js";
app.use("/api/v1/response", responseRoutes);

// Signup Routes
import signupRouter from "./routes/signup.routes.js";
app.use("/api/v1/signup", signupRouter);

// Login Route
import loginRouter from "./routes/login.routes.js";
console.log("Subscription router loaded:", subscriptionRouter);
app.use("/api/v1/login", loginRouter);

// Subscription Routes
import subscriptionRouter from "./routes/subscription.routes.js";
app.use("/api/v1/subscription", subscriptionRouter);

app.listen(51733, () => {
  console.log(`Server is running on port ${PORT}`);
});
