import query from "../db/utils";

export const easyLeader = async () => {
  return await query(
    "SELECT UserName, EasyScore, EasyCompletionTime FROM scores INNER JOIN users ON users.UserID = scores.UserID WHERE NOT EasyScore= 0 ORDER BY EasyScore, EasyCompletionTime ASC LIMIT 10;"
  );
};

export const hardLeader = async () => {
  return await query(
    "SELECT UserName, HardScore, HardCompletionTime FROM scores INNER JOIN users ON users.UserID = scores.UserID WHERE NOT HardScore= 0 ORDER BY HardScore, HardCompletionTime, EasyScore, EasyCompletionTime ASC LIMIT 10;"
  );
};

export const overkillLeader = async () => {
  return await query(
    "SELECT UserName, OverkillScore, OverkillCompletionTime FROM scores INNER JOIN users ON users.UserID = scores.UserID WHERE NOT OverkillScore= 0 ORDER BY OverkillScore, OverkillCompletionTime, HardScore, HardCompletionTime, EasyScore, EasyCompletionTime ASC LIMIT 10;"
  );
};

export const leadAll = async () => {
  return await query(
    "SELECT UserID, EasyScore, HardScore, OverkillScore FROM scores ORDER BY EasyScore ASC;"
  );
};

export default { easyLeader, hardLeader, overkillLeader, leadAll };
