"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HospitalisationModule = void 0;
const common_1 = require("@nestjs/common");
const hospitalisation_service_1 = require("./hospitalisation.service");
const hospitalisation_controller_1 = require("./hospitalisation.controller");
let HospitalisationModule = exports.HospitalisationModule = class HospitalisationModule {
};
exports.HospitalisationModule = HospitalisationModule = __decorate([
    (0, common_1.Module)({
        controllers: [hospitalisation_controller_1.HospitalisationController],
        providers: [hospitalisation_service_1.HospitalisationService]
    })
], HospitalisationModule);
//# sourceMappingURL=hospitalisation.module.js.map