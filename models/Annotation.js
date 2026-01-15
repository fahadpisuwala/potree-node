const mongoose = require("mongoose");

const AnnotationSchema = new mongoose.Schema(
  {
    text: String,
    position: Object,
    potreeid: String,
  },
  { timestamps: true }
);
const Annotation = mongoose.model("Annotation", AnnotationSchema, "annotation");

module.exports = Annotation;