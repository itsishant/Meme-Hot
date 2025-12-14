import hash from "bcrypt";
const passwordHash = async (password: string) => {
    try {
        const hashPassword = await hash.hash(password, 10);
        return hashPassword;
    } 
    
    catch (error) {
          console.log("Error in hashing password:", error);
    throw new Error("Password hashing failed");
    }
}

export {
    passwordHash
}
