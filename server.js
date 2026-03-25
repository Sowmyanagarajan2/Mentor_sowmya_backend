import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.js";
import courseRoutes from "./routes/course.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

app.use(cors({
  origin: "*"
}));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/courses", courseRoutes);

// Root
app.get("/", (req, res) => {
  res.send("MentorSowmya Backend Running 🚀");
});

// DB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));