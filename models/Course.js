import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  price: Number,
  thumbnail: String
}, { timestamps: true });

export default mongoose.model("Course", courseSchema);