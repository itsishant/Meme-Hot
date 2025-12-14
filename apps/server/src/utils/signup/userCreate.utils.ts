import { type Request } from "express";
import type { ISignupData } from "../../interface/signup.interface.js";
import { Users } from "../../models/signupModel.js";
const userCreate = async (req: Request<{}, {}, ISignupData>) => {
  const createUser = await Users.create(req.body);
  return createUser;
};

export { userCreate };
