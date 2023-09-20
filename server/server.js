import authRoutes from "./routes/index.js";
import { connectDB } from "./config/dbConnection.js";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
connectDB();

app.use("/api/v1/auth", authRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`app running on port ${PORT}`));
