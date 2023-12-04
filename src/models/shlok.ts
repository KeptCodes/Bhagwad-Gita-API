import mongoose from "mongoose";

const shlokSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  verse_number: {
    type: Number,
    required: true,
  },
  chapter_number: {
    type: Number,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  transliteration: {
    type: String,
    required: true,
  },
  word_meanings: {
    type: String,
    required: true,
  },
  translations: [
    {
      id: {
        type: Number,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      author_name: {
        type: String,
        required: true,
      },
      language: {
        type: String,
        required: true,
      },
    },
  ],
  commentaries: [
    {
      id: {
        type: Number,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      author_name: {
        type: String,
        required: true,
      },
      language: {
        type: String,
        required: true,
      },
    },
  ],
});

export default mongoose.model("Shlok", shlokSchema);
