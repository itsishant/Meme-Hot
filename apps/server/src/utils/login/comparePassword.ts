import bcrypt from "bcrypt";
const comparePassword = async (password: string, hashedPassword: string) => {
  try {
    const check = await bcrypt.compare(password, hashedPassword);
    return check;
  } catch (error) {
    throw new Error("Compare password failed");
  }
};

export { comparePassword };
