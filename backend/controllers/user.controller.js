import mongoose from "mongoose";
import { User } from "../schema/user.schema.js";

const addData = async (req, res) => {
  let { name, age, section, uid, place } = req.body;

  try {
    console.log(typeof name, typeof age);
    console.table([name, age, section, uid, place]);

    const response = await User.create({
      name,
      age,
      section,
      uid,
      place,
    });
  } catch (error) {
    console.log(error);
  }

  //   console.log(data);

  res.send(200);
};

const showMessage = async (req, res) => {
  console.log(
    "****************** Show message function is working ********************"
  );
  res.send("This route is working");
};

export { addData, showMessage };
