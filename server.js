import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

// ✅ DEFINE APP FIRST
const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: "*" }));

// Routes
import courseRoutes from "./routes/course.js";
import authRoutes from "./routes/auth.js";

app.use("/api/courses", courseRoutes);
app.use("/api/auth", authRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("MentorSowmya Backend Running 🚀");
});

const PORT = process.env.PORT || 5000;

// ✅ Start server AFTER DB connect
async function startServer() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected ✅");

    app.listen(PORT, () => {
      console.log(`Server running on ${PORT}`);
    });

  } catch (error) {
    console.error("FULL MONGO ERROR ❌:", error);
  }
}

startServer();