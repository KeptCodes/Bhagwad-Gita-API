import mongoose from "mongoose";

const chapterSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  name_transliterated: {
    type: String,
    required: true,
  },
  name_translated: {
    type: String,
    required: true,
  },
  verses_count: {
    type: Number,
    required: true,
  },
  chapter_number: {
    type: Number,
    required: true,
  },
  name_meaning: {
    type: String,
    requried: true,
  },
  chapter_summary: {
    type: String,
    required: true,
  },
  chapter_summary_hindi: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Chapter", chapterSchema);
