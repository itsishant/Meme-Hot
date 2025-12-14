import mongoose from "mongoose";
import { signupSchema } from "../schema/signup.schema.js";

const Users = mongoose.model("Users", signupSchema);

export { Users };
