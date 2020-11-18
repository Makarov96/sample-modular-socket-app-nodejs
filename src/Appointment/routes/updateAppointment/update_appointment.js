"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var appointment_handling_controller_1 = __importDefault(require("../../adapter/controllers/appointment_handling_controller"));
var router = express_1.default.Router();
router.put("/updateAppointment/:id", appointment_handling_controller_1.default.indexUpdateAppointment);
//Total appoinment
router.put("/updateManualTotalAppointment/:id", appointment_handling_controller_1.default.indexUpdateManualtTotalAppoinment);
exports.default = router;
//# sourceMappingURL=update_appointment.js.map