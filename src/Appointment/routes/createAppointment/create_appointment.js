"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var appointment_handling_controller_1 = __importDefault(require("../../adapter/controllers/appointment_handling_controller"));
var router = express_1.default.Router();
router.post("/createAppointment", appointment_handling_controller_1.default.indexCreateAppointment);
router.post("/createNewValueTotalAppoinment", appointment_handling_controller_1.default.indexCreateNewValueTotalAppoinment);
exports.default = router;
//# sourceMappingURL=create_appointment.js.map