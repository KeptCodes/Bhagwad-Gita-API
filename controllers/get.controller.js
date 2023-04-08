const Chapter = require("../models/chapter.model");
const Verse = require("../models/verse.model");

// Get all chapters....
exports.getChapters = async (req, res) => {
  try {
    const chapters = await Chapter.find();
    res.status(200).json(chapters);
  } catch (error) {
    res.status(404).json({ error: error.message });
    console.log(error);
  }
};

exports.getOneChapter = async (req, res) => {
  const { chapter } = req.params;
  try {
    const oneChapter = await Chapter.findOne({ chapter_number: chapter });
    if (oneChapter === null) {
      return res
        .status(400)
        .json({ error: "Can't find chapter with given number 😟" });
    }
    res.status(200).json(oneChapter);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllVerses = async (req, res) => {
  const { chapter } = req.params;
  try {
    const verses = await Verse.find({ chapter_number: chapter });
    console.log(verses);
    if (verses === null) {
      return res
        .status(400)
        .json({ error: "Can't find chapter with given number 😟" });
    }
    res.status(200).json(verses);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
    // console.log(error);
  }
};

exports.getOneVerse = async (req, res) => {
  const { chapter, verse } = req.query;

  console.log(chapter, verse);
  try {
    const oneVerse = await Verse.findOne({
      chapter_number: chapter,
      verse_number: verse,
    });

    if (oneVerse === null) {
      return res
        .status(400)
        .json({ error: "Can't find verse with given number. 😟" });
    }
    res.status(200).json(oneVerse);
  } catch (error) {
    res.status(404).json({ message: error.message });
    console.log(error);
  }
};