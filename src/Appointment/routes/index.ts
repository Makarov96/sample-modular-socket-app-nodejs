import expres from "express"
import getAppointment from "./getAppointment/getAppointment";
import createAppoinment from "./createAppointment/create_appointment";
import updateAppoinment from "./updateAppointment/update_appointment";
import deleteAppoinment from "./deleteAppointment/delete_appointment";


const router = expres.Router();
router.use("/appointment",getAppointment);
router.use("/appointment",createAppoinment);
router.use("/appointment",updateAppoinment);
router.use("/appointment",deleteAppoinment);


export default router;