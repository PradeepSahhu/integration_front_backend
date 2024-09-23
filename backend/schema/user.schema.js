import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    default: "Pradeep",
  },
  age: {
    type: String,
    required: true,
  },
  section: {
    type: String,
    required: true,
  },
  uid: {
    type: String,
    require: true,
  },
  place: {
    type: String,
    required: true,
  },
});

export const User = mongoose.model("User", userSchema);
