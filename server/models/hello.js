import mongoose from "mongoose";
import { helloSchema } from "./schemas/hello";

console.log(process.env.MONGODB_URI);

if (!process.env.MONGODB_URI) {
  console.error("Please specify env: MONGODB_URI");
} else {
  mongoose.connect(
    process.env.MONGODB_URI,
    {
      dbName: process.env.MONGODB_DBNAME || "nuxt-tailwind-mongo-starter-dev",
    },
  );
}

const HelloModel = mongoose.model("greetings", helloSchema);
export { HelloModel };
export default {};
