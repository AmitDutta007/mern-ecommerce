import UserModel from "../models/user.model.js";
import jwt from "jsonwebtoken";

const generatedRefreshToken = async (userId) => {
  try {
    const token = jwt.sign(
      { id: userId },
      process.env.SECRET_KEY_REFRESH_TOKEN,
      { expiresIn: "7d" }
    );

    const updateResult = await UserModel.updateOne(
      { _id: userId },
      { refresh_token: token }
    );

    if (updateResult.modifiedCount === 0) {
      throw new Error("Failed to update refresh token in the database.");
    }

    return token;
  } catch (error) {
    console.error("Error generating refresh token:", error.message);
    throw new Error("Could not generate refresh token.");
  }
};

export default generatedRefreshToken;
