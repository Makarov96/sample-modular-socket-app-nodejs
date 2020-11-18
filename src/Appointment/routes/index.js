"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var getAppointment_1 = __importDefault(require("./getAppointment/getAppointment"));
var create_appointment_1 = __importDefault(require("./createAppointment/create_appointment"));
var update_appointment_1 = __importDefault(require("./updateAppointment/update_appointment"));
var delete_appointment_1 = __importDefault(require("./deleteAppointment/delete_appointment"));
var router = express_1.default.Router();
router.use("/appointment", getAppointment_1.default);
router.use("/appointment", create_appointment_1.default);
router.use("/appointment", update_appointment_1.default);
router.use("/appointment", delete_appointment_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map