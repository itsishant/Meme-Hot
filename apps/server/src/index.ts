import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT;

import responseRoutes from "./routes/response.routes.js";
app.use("/api/v1/response", responseRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
