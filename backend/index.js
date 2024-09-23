import express from "express";
import { Router } from "express";
import cors from "cors";
// import bodyParser from "body-parser";
import connectToMongoose from "./DB/index.js";

import { app } from "./app.js";

const PORT = 3000 || process.env.PORT;

// const router = Router();
// router
//   .route("/")
//   .get((req, res, next) => {
//     // Your logic goes here
//     console.log("this page is working");
//     res.send("this is working");
//   })
//   .post((req, res) => {
//     console.log(req.body);

//     return res.sendStatus(200);
//   });
//     function (req, res) {
//     console.log("Home route is working");
//     return res.send({ name: "Pradeep", age: 21 });
//   })
//   .post(function (req, res) {
//     console.log(req.body);

//     return res.sendStatus(200);
//   });

// app.use(router);

connectToMongoose()
  .then(() => {
    app.on("error", () => {
      console.log(`Application can't connect with the database`);
    });
    console.log(`Connected to Database`);
    app.listen(PORT, (req, res) => {
      console.log(`Port is running on ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
