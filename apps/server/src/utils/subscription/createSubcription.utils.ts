import { Subscription } from "../../models/subscription.model.js";

const createSubscriptionData = async (data: any) => {
  const create = await Subscription.create(data);
  return create;
};

export { createSubscriptionData };
