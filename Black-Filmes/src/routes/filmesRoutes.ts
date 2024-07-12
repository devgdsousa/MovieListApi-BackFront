import { Router } from "express";
import { getFilmes, createFilme, getFilmeById, updateFilme, deleteFilme } from "../controllers/filmesController";

const router = Router();

router.get("/filme", getFilmes);
router.post("/filme", createFilme);
router.get("/filme/:id", getFilmeById);
router.put("/filme/:id", updateFilme);
router.delete("/filme/:id", deleteFilme);

export default router;
