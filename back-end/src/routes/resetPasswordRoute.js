import bcrypt from "bcrypt";
import { getDbConnection } from "../db";

export const resetPasswordRoute = {
  path: "/api/users/:passwordResetCode/reset-password",
  method: "put",
  handler: async (req, res) => {
    const { passwordResetCode } = req.params;
    const { newPassword } = req.body;

    const db = getDbConnection("react-auth-db");

    const newSalt = uuid(); //add salt to password
    const pepper = process.env.PEPPER_STRING; //add pepper to password

    const newPasswordHash = await bcrypt.hash(
      newSalt + newPassword + pepper,
      10
    );

    //Update user's pass in db
    const result = await db.collection("users").findOneAndUpdate(
      { passwordResetCode },
      {
        $set: { passwordHash: newPasswordHash, salt: newSalt },
        $unset: { passwordResetCode: "" },
      }
    );
    if (result.lastErrorObject.n === 0) return res.sendStatus(404);

    res.sendStatus(200);
  },
};
