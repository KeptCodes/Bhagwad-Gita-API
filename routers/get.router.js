const {
  getChapters,
  getOneChapter,
  getAllVerses,
  getOneVerse,
} = require("../controllers/get.controller");

const router = require("express").Router();

// Get chapters Routes
router.get("/chapters", getChapters);
router.get("/chapter/:chapter", getOneChapter);

// Get verses of one chapter
router.get("/chapter/:chapter/verses", getAllVerses);
router.get("/verse", getOneVerse);

module.exports = router;
