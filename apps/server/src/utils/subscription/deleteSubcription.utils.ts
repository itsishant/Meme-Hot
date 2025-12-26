import { Subscription } from "../../models/subscription.model.js";

const deletion = async (id: string) => {
  const deleteSubcription = await Subscription.findByIdAndDelete(id);
  return deleteSubcription;
};

export { deletion };
