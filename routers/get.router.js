const {
  getChapters,
  getOneChapter,
  getAllVerses,
  getOneVerse,
  getDailyVerse,
} = require("../controllers/get.controller");

const router = require("express").Router();

// Get chapters Routes
router.get("/chapters", getChapters);
router.get("/chapter/:chapter", getOneChapter);

// Get verses of one chapter
router.get("/chapter/:chapter/verses", getAllVerses);
router.get("/verse", getOneVerse);

// Get random verse
router.get("/daily", getDailyVerse);

module.exports = router;
