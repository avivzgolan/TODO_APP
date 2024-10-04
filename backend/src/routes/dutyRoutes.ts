import { Router } from "express";
import * as dutyController from "../controllers/dutyController";

const router = Router();

router.get("/", dutyController.getAllDuties);
router.get("/:id", dutyController.getDutyById);
router.post("/", dutyController.createDuty);
router.put("/:id", dutyController.updateDuty);
router.delete("/:id", dutyController.deleteDuty);

export default router;
