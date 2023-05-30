import mongoose from "mongoose";

export const mongooseConnect = async () => {
  await mongoose.connect(process?.env?.MONGODB_URL || "");

  return true;
};
