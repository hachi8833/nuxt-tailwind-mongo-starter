import mongoose from "mongoose";

const helloSchema = new mongoose.Schema(
  {
    message: String,
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  },
);

helloSchema.post(
  "updateOne",
  (result) => {
    console.info("helloSchema is saved!", result);
  },
);

export { helloSchema };
export default {};
