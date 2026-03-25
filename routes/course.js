import express from "express";
import Course from "../models/Course.js";

const router = express.Router();

// Create course
router.post("/", async (req, res) => {
  try {
    const course = await Course.create(req.body);
    res.json(course);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// Get all courses
router.get("/", async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

export default router;