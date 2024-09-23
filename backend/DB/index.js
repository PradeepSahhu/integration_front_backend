import mongoose from "mongoose";

// mongodb://localhost:27017/
const connectToMongoose = async () => {
  try {
    const connection = await mongoose.connect(
      `mongodb://127.0.0.1:27017/users`
    );
    if (connection) {
      console.log(`Successfully connected to database`);
    }
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectToMongoose;
