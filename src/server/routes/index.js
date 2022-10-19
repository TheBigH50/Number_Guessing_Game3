import express from "express";
import leaderboardRouter from "./leaderboard.route";
import gameRouter from "./game.route";

const router = express.Router();

router.get("/test", (req, res, next) => {
  res.send("Hello World!");
});

router.use("/leaderboard", leaderboardRouter);

router.use("/game", gameRouter);

export default router;
