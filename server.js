import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://mentorsowmya-lms.vercel.app" // update after deploy
  ],
  credentials: true
}));

// Routes
import authRoutes from "./routes/auth.js";
import courseRoutes from "./routes/course.js";

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