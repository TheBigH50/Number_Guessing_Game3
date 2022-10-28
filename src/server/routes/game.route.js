import express from "express";
import gameChoice from "../controllers/game.controller";

const router = express.Router();

router.get("/:gameLevel", async (req, res, next) => {
    try {
        let { GameLevel } = req.params;
        let data = await gameChoice.chooseLevel(GameLevel);
        res.json(data);
    } catch (error) {
        next(error);
    }
});

export default router;