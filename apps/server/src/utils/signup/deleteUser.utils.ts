import { Users } from "../../models/signupModel.js";

const deleteUserFunction = async (userId: string) => {
  try {
    const deleteUser = await Users.findByIdAndDelete(userId);
    return deleteUser;
  } catch (error) {
    throw new Error("Delete user failed");
  }
};

export { deleteUserFunction };
