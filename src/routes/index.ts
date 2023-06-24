import express from "express";
import { CowRoutes } from "../app/modules/cows/cows.routes";
const router = express.Router();
import { UserRoutes } from "../app/modules/users/users.routes";

router.use("/user-route", UserRoutes);
router.use("/cow-route", CowRoutes);

export default router;
