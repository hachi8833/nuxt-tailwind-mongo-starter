import { Schema } from "mongoose";

const messageSchema = new Schema({
  text: String,
},);

export { messageSchema };
export default {};
