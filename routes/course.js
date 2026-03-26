import express from "express";
import Course from "../models/Course.js";

const router = express.Router();

// ✅ GET courses
router.get("/", async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    console.error("GET ERROR:", err.message);
    res.status(500).json({ error: err.message });
  }
});

// ✅ CREATE course (FIXED)
router.post("/", async (req, res) => {
  try {
    console.log("Incoming data:", req.body);

    const { title, description, price } = req.body;

    const course = await Course.create({
      title,
      description,
      price
    });

    res.json(course);
  } catch (err) {
    console.error("POST ERROR:", err.message);
    res.status(500).json({ error: err.message });
  }
});

// 🧹 TEMP DELETE ALL (use once)
router.delete("/all", async (req, res) => {
  await Course.deleteMany({});
  res.json({ message: "All courses deleted" });
});

export default router;