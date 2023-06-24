import express from "express";
import { CowController } from "./cows.controllers";
const router = express.Router();

router.get('/cows',CowController.getAllCowController)
router.get('/cows/:id',CowController.getSingleCowController)
router.post('/cows',CowController.createCowController)
router.patch('/cows/:id',CowController.updateCowrController)
router.delete('/cows/:id',CowController.deleteCowController)

export const CowRoutes = router;
