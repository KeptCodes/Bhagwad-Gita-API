import { Router } from "express";
import {
  getAllChapters,
  getAllShloks,
  getDailyShlok,
  getOneChapter,
  getOneShlok,
} from "../../services/service";

const apiRoutes = Router();

// Get chapters Routes
apiRoutes.get("/chapters", getAllChapters);
apiRoutes.get("/chapter/:chapter", getOneChapter);

// Get shloks of one chapter
apiRoutes.get("/chapter/:chapter/shloks", getAllShloks);
apiRoutes.get("/shlok", getOneShlok);

// Get random shlok
apiRoutes.get("/daily", getDailyShlok);

export default apiRoutes;
