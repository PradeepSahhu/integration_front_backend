import { addData, showMessage } from "../controllers/user.controller.js";

import { Router } from "express";

const router = Router();

router.route("/").get(showMessage);
router.route("/addUser").post(addData);

export default router;
