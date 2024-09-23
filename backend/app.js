import express from "express";
import cors from "cors";

const app = express();

import userRoute from "./routes/user.routes.js";
app.use(express.json());
app.use(cors());
app.use("/api/v1/users", userRoute);

export { app };
