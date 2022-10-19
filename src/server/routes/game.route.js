import express from "express";

const router = express.Router();

router.get("/game:gameLevel", async (req, res, next) => {
    try {
        let { gameLevel } = req.params;
        let chooseLevel = req.body;
        let data = await gameChoice.chooseLevel(chooseLevel, gameLevel);
        res.json(data);
    } catch (error) {
        next(error);
    }
});

export default router;