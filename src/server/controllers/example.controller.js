import query from "../db/utils";

export const findAll = async () => {
  return await query("SELECT * FROM table");
};

/*export const find = async (columnMatch1, columnMatch2, columnMatch3) => {
  if (columnMatch1 && columnMatch2 && columnMatch3) {
    return await query("SELECT * FROM products WHERE ? AND ? AND ? ;");
  } else if (columnMatch1 && columnMatch2 && columnMatch3 == undefined) {
    return await query("SELECT * FROM products WHERE ? AND ? ;");
  } else {
    return await query("SELECT * FROM products WHERE ? ;");
  }
};
*/