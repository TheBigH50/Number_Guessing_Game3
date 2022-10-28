import express from "express";
import leaderboard from "../controllers/leaderboard.controller.js";

const router = express.Router();

// 09-29-2022 come back later and reduce number of routers

// Get Routers

router.get("/easy", async (req, res, next) => {
  try {
    let data = await leaderboard.easyLeader();
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.get("/hard", async (req, res, next) => {
  try {
    let data = await leaderboard.hardLeader();
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.get("/overkill", async (req, res, next) => {
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
    console.log(UserName);
    let data = await leaderboard.findUserID(UserName);
    res.json(data);
  } catch (error) {
    next(error);
  }
});



router.get("/users/:UserID", async (req, res, next) => {
  try {
    let { UserID } = req.params;    
    let data = await leaderboard.currentUserScores(parseInt(UserID));
    res.json(data);
  } catch (error) {
    next(error);
  }
});

// Post Router

router.post("/", async (req, res, next) => {
  try {
    let newUser = req.body;
    let data = await leaderboard.newUser(newUser);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

// Put Routers

router.put("/:UserID", async (req, res, next) => {
  try {
    let { UserID } = req.params;
    let updatedEasyScore = req.body;
    let data = await leaderboard.updateEasyScore(updatedEasyScore, UserID);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.put("/:UserID", async (req, res, next) => {
  try {
    let { UserID } = req.params;
    let updatedEasyScore = req.body;
    let data = await leaderboard.updateEasyScore(updatedEasyScore, UserID);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.put("/:UserID", async (req, res, next) => {
  try {
    let { UserID } = req.params;
    let updatedEasyScore = req.body;
    let data = await leaderboard.updateEasyScore(updatedEasyScore, UserID);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.put("/:UserID", async (req, res, next) => {
  try {
    let { UserID } = req.params;
    let updatedHardScore = req.body;
    let data = await leaderboard.updateHardScore(updatedHardScore, UserID);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.put("/:UserID", async (req, res, next) => {
  try {
    let { UserID } = req.params;
    let updatedOverkillScore = req.body;
    let data = await leaderboard.updateOverkillScore(
      updatedOverkillScore,
      UserID
    );
    res.json(data);
  } catch (error) {
    next(error);
  }
});

export default router;
