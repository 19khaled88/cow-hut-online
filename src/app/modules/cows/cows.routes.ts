import express from "express";
const router = express.Router()

router.route("/routes").get().post().patch()

export const CowRoutes = router