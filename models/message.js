import { messageSchema } from "./schemas/message";
const Message = mongoose.model("messages", messageSchema);
const message = new Message({ text: "hello" });
await message.save();
