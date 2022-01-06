import express from "express";
import schoolController from "./school.controller";
import tradeController from "./trade.controller";

const router = express.Router();

router.use("/schools", schoolController);
router.use("/trade", tradeController);

export default router;
