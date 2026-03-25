import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  instructor: String,
  price: Number,
  thumbnail: String,
  lessons: [
    {
      title: String,
      videoUrl: String
    }
  ]
});

export default mongoose.model("Course", courseSchema);