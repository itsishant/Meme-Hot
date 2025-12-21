import mongoose from "mongoose";
import { subscriptionSchema } from "../schema/subscription.schemas.js";

const Subscription =  mongoose.model("Subscription", subscriptionSchema);

export { Subscription };
