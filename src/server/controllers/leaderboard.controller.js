import query from "../db/utils";

export const easyLeader = async () => {
  return await query("SELECT UserName, scores.UserID, EasyScore, EasyCompletionTime FROM scores INNER JOIN users ON users.UserID = scores.UserID ORDER BY EasyScore, EasyCompletionTime ASC LIMIT 10;");
};

export const hardLeader = async () => {
  return await query("SELECT UserName, scores.UserID, HardScore, HardCompletionTime FROM scores INNER JOIN users ON users.UserID = scores.UserID ORDER BY HardScore, HardCompletionTime, EasyScore, EasyCompletionTime ASC LIMIT 10;");
};

export const overkillLeader = async () => {
  return await query("SELECT UserName, scores.UserID, OverkillScore, OverkillCompletionTime FROM scores INNER JOIN users ON users.UserID = scores.UserID ORDER BY OverkillScore, OverkillCompletionTime, HardScore, HardCompletionTime, EasyScore, EasyCompletionTime ASC LIMIT 10;");
};