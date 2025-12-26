import { Subscription } from "../../models/subscription.model.js";
import { type Request } from "express";

const update = async (id: string, req: Request) => {
  const update = await Subscription.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  return update;
};

export { update };
