import expres from "express";
import AppointmentController from "../../adapter/controllers/appointment_handling_controller";

const router = expres.Router();
router.post("/createAppointment", AppointmentController.indexCreateAppointment);
router.post("/createNewValueTotalAppoinment", AppointmentController.indexCreateNewValueTotalAppoinment);

export default router;