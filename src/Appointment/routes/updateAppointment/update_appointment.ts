import express from "express";
import AppointmentController from "../../adapter/controllers/appointment_handling_controller";

const router = express.Router()

router.put("/updateAppointment/:id", AppointmentController.indexUpdateAppointment)
//Total appoinment
router.put("/updateManualTotalAppointment/:id", AppointmentController.indexUpdateManualtTotalAppoinment)

export default router;
