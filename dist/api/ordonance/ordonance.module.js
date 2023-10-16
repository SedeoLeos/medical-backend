"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdonanceModule = void 0;
const common_1 = require("@nestjs/common");
const ordonance_service_1 = require("./ordonance.service");
const ordonance_controller_1 = require("./ordonance.controller");
let OrdonanceModule = exports.OrdonanceModule = class OrdonanceModule {
};
exports.OrdonanceModule = OrdonanceModule = __decorate([
    (0, common_1.Module)({
        controllers: [ordonance_controller_1.OrdonanceController],
        providers: [ordonance_service_1.OrdonanceService]
    })
], OrdonanceModule);
//# sourceMappingURL=ordonance.module.js.map