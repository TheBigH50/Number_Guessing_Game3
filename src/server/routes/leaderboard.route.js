import express from "express";
import leaderboard from "../controllers/leaderboard.controller";

const router = express.Router();

// 09-29-2022 come back later and reduce number of get routers
router.get("/", async (req, res, next) => {
  try {
    let data = await leaderboard.easyLeader();
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
    try {
      let data = await leaderboard.hardLeader();
      res.json(data);
    } catch (error) {
      next(error);
    }
  });

  router.get("/", async (req, res, next) => {
    try {
      let data = await leaderboard.overkillLeader();
      res.json(data);
    } catch (error) {
      next(error);
    }
  });

  router.post("/", async (req, res, next) => {
    try {
      let newUser = req.body;
      let data = await employees.newUser(newUser);
      res.json(data);
    } catch (error) {
      next(error);
    }
  });

