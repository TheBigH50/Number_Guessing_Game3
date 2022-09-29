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

  router.get("/:UserName", async (req, res, next) => {
    try {
      let { UserName } = req.params;
      let data = await leaderboard.findUserID(UserName);
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

  router.put("/:UserID", async (req, res, next) => {
    try {
      let { UserID } = req.params;
      let updatedEasyScore = req.body;
      let data = await employees.updateEasyScore(updatedEasyScore, UserID);
      res.json(data);
    } catch (error) {
      next(error);
    }
  });
