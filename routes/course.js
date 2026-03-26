import express from "express";
import Course from "../models/Course.js";

const router = express.Router();

// ✅ GET courses (SAFE VERSION)
router.get("/", async (req, res) => {
  try {
    console.log("Fetching courses...");

    const courses = await Course.find();

    res.json(courses);
  } catch (error) {
    console.error("COURSE FETCH ERROR ❌:", error);
    res.status(500).json({
      message: "Error fetching courses",
      error: error.message
    });
  }
});

// ✅ CREATE course
router.post("/", async (req, res) => {
  try {
    const course = await Course.create(req.body);
    res.json(course);
  } catch (error) {
    console.error("COURSE CREATE ERROR ❌:", error);
    res.status(500).json({
      message: "Error creating course",
      error: error.message
    });
  }
});

export default router;