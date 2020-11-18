import express from "express"
import AppointmentControllerImpl from "../../adapter/controllers/appointment_handling_controller";


const router = express.Router();

router.delete("/deleteappointment/:id",AppointmentControllerImpl.indexDeleteAppointment)


export default router;