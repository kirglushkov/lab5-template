import mongoose, { Schema, Document } from "mongoose";

// Create an interface representing a document in MongoDB
interface UnicornsInterface extends Document {
  name: string;
  loves: string[];
  weight: number;
  gender: "m" | "f" | "other";
  vampires: number;
}

// Define the schema for the model
const UnicornsSchema = new Schema({
  name: {
    type: String, // устанавливаем, что тип поля name будет только строковый
    required: true, // устанавливаем, что этот параметр обязательный, поможет
                    // избежать некоторых ошибок
  },
  loves: {
    type: [String], // устанавливаем, что тип поля name будет только Списком строк
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    enum: ["m", "f", "other"], // устанавливаем, что тип поля gender будет только m, f, other
    required: true,
  },
  vampires: {
    type: Number,
    required: false,
  },
});

// Define the model
const Unicorns = mongoose.model<UnicornsInterface>("learn", UnicornsSchema);

export { Unicorns };
export type { UnicornsInterface };
