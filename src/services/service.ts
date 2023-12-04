import { Request, Response } from "express";
import Chapter from "../models/chapter";
import Shlok from "../models/shlok";

const getAllChapters = async (req: Request, res: Response) => {
  try {
    const chapters = await Chapter.find();
    res.status(200).json(chapters);
  } catch (error: any) {
    res.status(404).json({ error: error.message });
    console.log(error);
  }
};

const getOneChapter = async (req: Request, res: Response) => {
  const { chapter } = req.params;
  const chapterNumber = parseInt(chapter);

  if (isNaN(chapterNumber)) {
    return res.status(400).json({ error: "Invalid chapter number 😟" });
  }

  try {
    const oneChapter = await Chapter.findOne({ chapter_number: chapterNumber });

    if (!oneChapter) {
      return res.status(404).json({ error: "Chapter not found 😟" });
    }

    res.status(200).json(oneChapter);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
    console.log(error);
  }
};

const getAllShloks = async (req: Request, res: Response) => {
  const { chapter } = req.params;
  try {
    const shloks = await Shlok.find({ chapter_number: chapter });

    if (shloks === null) {
      return res
        .status(400)
        .json({ error: "Can't find chapter with given number 😟" });
    }
    res.status(200).json(shloks);
  } catch (error: any) {
    res.status(500).json({
      error: error.message,
    });
    console.log(error);
  }
};
const getOneShlok = async (req: Request, res: Response) => {
  const { chapter, shlok }: { chapter: string; shlok: string } =
    req.query as any;

  const chapterNumber = parseInt(chapter);
  const shlokNumber = parseInt(shlok);

  if (isNaN(chapterNumber) || isNaN(shlokNumber)) {
    return res.status(400).json({ error: "Invalid chapter or Shlok number" });
  }

  try {
    const oneShlok = await Shlok.findOne({
      chapter_number: chapterNumber,
      verse_number: shlokNumber,
    });

    if (!oneShlok) {
      return res.status(404).json({ error: "Shlok not found" });
    }

    res.status(200).json(oneShlok);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
    console.log(
      `Error executing query for chapter ${chapter} and verse ${shlok}: ${error.message}`
    );
  }
};

const getDailyShlok = async (req: Request, res: Response) => {
  const prev = String(req.query.prev || "1");
  const prevValue = parseInt(prev);

  if (isNaN(prevValue) || prevValue < 0) {
    return res.status(400).json({ error: "Invalid 'prev' value" });
  }

  try {
    const shlok = await Shlok.findOne({ id: prevValue });

    if (!shlok) {
      return res.status(404).json({ error: "Shlok not found 😟" });
    }

    res.status(200).json(shlok);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
    console.log(error);
  }
};

export {
  getAllChapters,
  getAllShloks,
  getDailyShlok,
  getOneChapter,
  getOneShlok,
};
