import type { ISubscription } from "../../interface/subscription.interface.js";
import { Subscription } from "../../models/subscription.model.js";

const getSubscriptionId = async (id: string) => {
  const subscription = await Subscription.findById(id);
  return subscription;
};

export { getSubscriptionId };
