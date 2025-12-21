import { type Request } from "express"  
import { Subscription } from "../../models/subscription.model.js"
const createSubscriptionData = async (req: Request) => {
    const create = await Subscription.create(req.body);
    return create;
}

export {
    createSubscriptionData
}
