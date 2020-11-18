"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentPrismaDatasource = void 0;
var index_1 = require("../../../../../prisma/generated/prisma-client/index");
var cron = __importStar(require("node-cron"));
var AppointmentPrismaDatasource = /** @class */ (function () {
    function AppointmentPrismaDatasource() {
    }
    AppointmentPrismaDatasource.prototype.updateManualTotalAppoinment = function (id, value) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.prisma.updateTotalAppointment({
                            where: { id: id.toString() },
                            data: {
                                defaultTotal: value,
                                total: value
                            }
                        }).$fragment("{total}")];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AppointmentPrismaDatasource.prototype.createNewValueTotalAppoinment = function (newValueTotalAppointment) {
        return __awaiter(this, void 0, void 0, function () {
            var newTotalAppoinment;
            return __generator(this, function (_a) {
                newTotalAppoinment = index_1.prisma.createTotalAppointment({
                    defaultTotal: newValueTotalAppointment.total,
                    total: newValueTotalAppointment.total
                });
                return [2 /*return*/, newTotalAppoinment];
            });
        });
    };
    AppointmentPrismaDatasource.prototype.getTotalAppoinment = function () {
        return __awaiter(this, void 0, void 0, function () {
            var fragment;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fragment = "{ id createdAt updatedAt total}";
                        return [4 /*yield*/, index_1.prisma.totalAppointments().$fragment(fragment)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AppointmentPrismaDatasource.prototype.updateTotalAppoinment = function () {
        var _this = this;
        cron.schedule("25 21 * * *", function () { return __awaiter(_this, void 0, void 0, function () {
            var totalappoimnet, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, index_1.prisma.totalAppointments().$fragment("{id defaultTotal}")];
                    case 1:
                        totalappoimnet = _a.sent();
                        index_1.prisma.updateTotalAppointment({
                            where: { id: totalappoimnet[0].id.toString() },
                            data: {
                                total: totalappoimnet[0].defaultTotal
                            }
                        })
                            .$fragment("{id}")
                            .catch(function (error) { return console.error("Sucedio un error tiempo de respuesta invalid" + error); });
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.error("Error inesperado" + error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); }, {
            scheduled: true,
            timezone: "America/Guatemala"
        });
    };
    // Appointment Component 
    AppointmentPrismaDatasource.prototype.createAppoinment = function (newAppoinment) {
        return __awaiter(this, void 0, void 0, function () {
            var appointmentCreated;
            return __generator(this, function (_a) {
                appointmentCreated = index_1.prisma.createAppointment({
                    hair: newAppoinment.hair.toString(),
                    price: newAppoinment.price,
                    size: newAppoinment.size.toString(),
                    time: newAppoinment.time.toString(),
                    imagePath: newAppoinment.imagePath.toString()
                });
                return [2 /*return*/, appointmentCreated.id()];
            });
        });
    };
    AppointmentPrismaDatasource.prototype.appoitments = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.prisma.appointments().$fragment("{ id size price hair time imagePath}")];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AppointmentPrismaDatasource.prototype.updateAppoinment = function (id, updateAppoinment) {
        return __awaiter(this, void 0, void 0, function () {
            var resultID;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.prisma.updateAppointment({
                            where: {
                                id: id.toString()
                            },
                            data: {
                                hair: updateAppoinment.hair.toString(),
                                price: updateAppoinment.price,
                                size: updateAppoinment.size.toString(),
                                time: updateAppoinment.time.toString(),
                                imagePath: updateAppoinment.imagePath.toString()
                            }
                        })];
                    case 1:
                        resultID = _a.sent();
                        return [2 /*return*/, resultID.id];
                }
            });
        });
    };
    AppointmentPrismaDatasource.prototype.deleteAppoinment = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var reultDeleteID;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.prisma.deleteAppointment({
                            id: id.toString()
                        })];
                    case 1:
                        reultDeleteID = _a.sent();
                        return [2 /*return*/, reultDeleteID.id];
                }
            });
        });
    };
    return AppointmentPrismaDatasource;
}());
exports.AppointmentPrismaDatasource = AppointmentPrismaDatasource;
//# sourceMappingURL=appointment_prisma_repository.js.map