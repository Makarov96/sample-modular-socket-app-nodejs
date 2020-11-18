import express from "express";
import AppointmentControllerImpl from "../../adapter/controllers/appointment_handling_controller";

const router = express.Router();
router.get("/getall", AppointmentControllerImpl.indexGetAppointment);

//Total apoointmet
router.get("/getTotalAppoiment", AppointmentControllerImpl.indexGetTotalAppointment);


export default router;