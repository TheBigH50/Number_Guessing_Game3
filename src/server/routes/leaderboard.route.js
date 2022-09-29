import express from "express";
import leaderboard from "../controllers/leaderboard.controller"

const router = express.Router()

router.get("/:id?", async (req, res, next) => {
    try {
      let { id } = req.params;
      let data;
      if (id) {
        [data] = await leaderboard.easyLeader(parseInt(id));
      } else {
        data = await .findAll();
      }
      res.json(data);
    } catch (error) {
      next(error);
    }
  });
