import query from "../db/utils";

// Get Query's

const easyLeader = async () => {
  return await query(
    "SELECT ScoreID, UserName, EasyScore, EasyCompletionTime FROM scores INNER JOIN users ON users.UserID = scores.UserID WHERE NOT EasyScore= 0 ORDER BY EasyScore, EasyCompletionTime ASC LIMIT 10"
  );
};

const hardLeader = async () => {
  return await query(
    "SELECT ScoreID, UserName, HardScore, HardCompletionTime FROM scores INNER JOIN users ON users.UserID = scores.UserID WHERE NOT HardScore= 0 ORDER BY HardScore, HardCompletionTime, EasyScore, EasyCompletionTime ASC LIMIT 10"
  );
};

const overkillLeader = async () => {
  return await query(
    "SELECT ScoreID, UserName, OverkillScore, OverkillCompletionTime FROM scores INNER JOIN users ON users.UserID = scores.UserID WHERE NOT OverkillScore= 0 ORDER BY OverkillScore, OverkillCompletionTime, HardScore, HardCompletionTime, EasyScore, EasyCompletionTime ASC LIMIT 10"
  );
};

const findUserID = async (UserName) => {
  return await query("SELECT UserName, UserID FROM users WHERE Username= ?", [UserName]);
};

const currentUserScores = async (UserID) => {
  return await query("SELECT UserName, EasyScore, EasyCompletionTime, HardScore, HardCompletionTime, OverkillScore, OverkillCompletionTime FROM scores INNER JOIN users ON scores.UserID = users.UserID WHERE users.UserID = ?", [UserID]);
};
// 
//  
// Post Query

const newUser = async (UserName) => {
  return await query("INSERT INTO users SET ?", [UserName]);
};

// Put Query's

const updateEasyScore = async (updatedEasyScore, UserID) => {
  return await query("UPDATE scores SET ? WHERE UserID= ?", [
    updatedEasyScore,
    UserID,
  ]);
};

const updateHardScore = async (updatedHardScore, UserID) => {
  return await query("UPDATE scores SET ? WHERE UserID= ?", [
    updatedHardScore,
    UserID,
  ]);
};

const updateOverkillScore = async (updatedOverkillScore, UserID) => {
  return await query("UPDATE scores SET ? WHERE UserID= ?", [
    updatedOverkillScore,
    UserID,
  ]);
};

export default {
  easyLeader,
  hardLeader,
  overkillLeader,
  newUser,
  findUserID,
  updateEasyScore,
  updateHardScore,
  updateOverkillScore,
  currentUserScores };

/*
export const leadAll = async () => {
  return await query(
    "SELECT UserID, EasyScore, HardScore, OverkillScore FROM scores ORDER BY EasyScore ASC;"
  );
};
*/
