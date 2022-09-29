import express from "express";
import leaderboardRouter from "./leaderboard.route"

const router = express.Router();

router.get("/test", (req, res, next) => {
  res.send("Hello World!");
});

router.use("/leaderboard", leaderboardRouter);

export default router;
