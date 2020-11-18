"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var appointment_manager_1 = require("../managers/appointment_manager");
var appointment_prisma_repository_1 = require("../../data/resources/appointment_prisma_repository");
var http_exception_1 = __importDefault(require("../../../../core/exceptions/http_exception"));
var AppointmentController = /** @class */ (function () {
    function AppointmentController() {
        var _this = this;
        this.indexGetAppointment = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); }); };
        this.indexDeleteAppointment = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); }); };
        this.indexCreateAppointment = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); }); };
        this.indexUpdateAppointment = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); }); };
        this.indexGetTotalAppointment = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); }); };
        this.indexUpdateManualtTotalAppoinment = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); }); };
        this.indexCreateNewValueTotalAppoinment = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); }); };
    }
    return AppointmentController;
}());
var AppointmentControllerImpl = /** @class */ (function () {
    function AppointmentControllerImpl() {
        var _this = this;
        this.indexCreateNewValueTotalAppoinment = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
            var newTotalAppointment, result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        newTotalAppointment = req.body.data;
                        if (!!newTotalAppointment.total) return [3 /*break*/, 1];
                        next(new http_exception_1.default(400, "Falta informacion en el json", "Error en el json un dato viene indefinido " + ("" + newTotalAppointment.total)));
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.appointmentRepositoryImpl.createNewValueTotalAppoinment(newTotalAppointment)];
                    case 2:
                        result = _a.sent();
                        res.status(201).send(result);
                        _a.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        next(new http_exception_1.default(400, "Error interno vuelve a intentar mas tarde", error_1));
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        this.indexUpdateManualtTotalAppoinment = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
            var newValueTotalAppointment, result, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        newValueTotalAppointment = req.body.data;
                        if (!(!req.params.id || !newValueTotalAppointment.value)) return [3 /*break*/, 1];
                        next(new http_exception_1.default(400, "Falta informacion en el json", "Error en el json un dato viene indefinido " + (req.params.id + " " + newValueTotalAppointment.value)));
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.appointmentRepositoryImpl.updateManualTotalAppoinment(req.params.id, newValueTotalAppointment.value)];
                    case 2:
                        result = _a.sent();
                        res.status(201).send(result);
                        _a.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        error_2 = _a.sent();
                        next(new http_exception_1.default(400, "Error interno vuelve a intentar mas tarde", error_2));
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        this.indexGetTotalAppointment = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
            var totalappoimnet;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.appointmentRepositoryImpl.getTotalAppoinment()];
                    case 1:
                        totalappoimnet = _a.sent();
                        res.json(totalappoimnet);
                        return [2 /*return*/];
                }
            });
        }); };
        //Normal appoinment
        this.indexGetAppointment = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
            var appointment;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.appointmentRepositoryImpl.getAppointment()];
                    case 1:
                        appointment = _a.sent();
                        res.json(appointment);
                        return [2 /*return*/];
                }
            });
        }); };
        this.indexDeleteAppointment = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                try {
                    if (!req.params.id) {
                        next(new http_exception_1.default(400, "Falta informacion en el json", "Error en el json un dato viene indefinido " + (req.params.id + " ")));
                    }
                    else {
                        result = this.appointmentRepositoryImpl.deleteAppoinment(req.params.id);
                        res.status(201).send(result);
                    }
                }
                catch (error) {
                    next(new http_exception_1.default(400, "Error interno vuelve a intentar mas tarde", error));
                }
                return [2 /*return*/];
            });
        }); };
        this.indexCreateAppointment = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
            var appointmentcreated, result, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        appointmentcreated = req.body.data;
                        if (!(!appointmentcreated.hair || !appointmentcreated.price
                            || !appointmentcreated.time || !appointmentcreated.size ||
                            !appointmentcreated.imagePath)) return [3 /*break*/, 1];
                        next(new http_exception_1.default(400, "Falta informacion en el json", "Error en el json un dato viene indefinido " + (appointmentcreated.hair + " " + appointmentcreated.price + " " + appointmentcreated.size + " " + appointmentcreated.time)));
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.appointmentRepositoryImpl.createAppointment(appointmentcreated)];
                    case 2:
                        result = _a.sent();
                        res.status(201).send(result);
                        _a.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        error_3 = _a.sent();
                        next(new http_exception_1.default(400, "Error interno vuelve a intentar mas tarde", error_3));
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        this.indexUpdateAppointment = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
            var appointmentupdated, result;
            return __generator(this, function (_a) {
                try {
                    appointmentupdated = req.body.data;
                    if (!appointmentupdated.hair || !appointmentupdated.price
                        || !appointmentupdated.time || !appointmentupdated.size || !req.params.id) {
                        next(new http_exception_1.default(400, "Falta informacion en el json", "Error en el json un dato viene indefinido " + (appointmentupdated.hair + " " + appointmentupdated.price + " " + appointmentupdated.size + " " + appointmentupdated.time + "+ " + req.params.id)));
                    }
                    else {
                        result = this.appointmentRepositoryImpl.updateAppoinment(req.params.id, appointmentupdated);
                        res.status(201).send(result);
                    }
                }
                catch (error) {
                    next(new http_exception_1.default(400, "Error interno vuelve a intentar mas tarde", error));
                }
                return [2 /*return*/];
            });
        }); };
        this.appointmentRepositoryImpl = new appointment_manager_1.AppointmentManager(new appointment_prisma_repository_1.AppointmentPrismaDatasource());
        //Este es un trabajo que se ejecuta al actualizar las citas 
        this.appointmentRepositoryImpl.updateTotalAppointmen();
    }
    return AppointmentControllerImpl;
}());
exports.default = new AppointmentControllerImpl();
//# sourceMappingURL=appointment_handling_controller.js.map