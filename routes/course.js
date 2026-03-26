import express from "express";
import Course from "../models/Course.js";

const router = express.Router();

// GET all courses
router.get("/", async (req, res) => {
  try {
    console.log("Fetching courses...");

    const courses = await Course.find();

    res.json(courses);
  } catch (err) {
    console.error("ERROR FETCHING COURSES:", err.message);
    res.status(500).json({ error: err.message });
  }
});

// CREATE course
router.post("/", async (req, res) => {
  try {
    console.log("Creating course:", req.body);

    const course = await Course.create(req.body);

    res.json(course);
  } catch (err) {
    console.error("ERROR CREATING COURSE:", err.message);
    res.status(500).json({ error: err.message });
  }
});

export default router;