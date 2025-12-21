import { Users } from "../../models/signupModel.js";

const getInfo = async (userId: string) => {
  try {
    const user = await Users.findById(userId).select("-password");
    return user;
  } catch (error) {
    throw new Error("Get user info failed");
  }
};

export { getInfo };
