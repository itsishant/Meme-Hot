import { Users } from "../../models/signupModel.js";

const checkUserExist = async (email: string) => {
    try {

        const findUser = await Users.findOne({email: email});
        return findUser;

    } catch (error) {
        console.log("Error in checking user existence:", error);
        throw new Error("User existence check failed");
    }
}

export {
    checkUserExist
}
