import { useBody } from "h3";
import { HelloModel } from "~/server/models/hello";

export default async (req, res) => {
  switch (req.method) {
    case "GET": {
      const docs = await HelloModel.find();
      return { greetings: docs };
    }

    case "POST": {
      const body = await useBody(req);
      const { message } = body.params;
      const doc = await HelloModel.create({ message });
      return { greetings: [doc] };
    }

    case "PUT": {
      const body = await useBody(req);
      const { id, message } = body.params;
      const result = await HelloModel.updateOne({ _id: id }, { message });
      if (result.acknowledged && result.matchedCount === 1) {
        const doc = await HelloModel.findOne({ _id: id });
        return { greetings: [doc] };
      } else {
        return { greetings: [] };
      }
    }

    case "DELETE": {
      const body = await useBody(req);
      const { id } = body.params;
      const result = await HelloModel.deleteOne({ _id: id });
      if (result.acknowledged && result.deletedCount === 1) {
        const doc = { _id: id };
        return { greetings: [doc] };
      } else {
        return { greetings: [] };
      }
    }

    default: {
      return { greetings: [] };
    }
  }
};
