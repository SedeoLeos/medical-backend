"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HospitalisationController = void 0;
const common_1 = require("@nestjs/common");
const hospitalisation_service_1 = require("./hospitalisation.service");
const create_hospitalisation_dto_1 = require("./dto/create-hospitalisation.dto");
const update_hospitalisation_dto_1 = require("./dto/update-hospitalisation.dto");
let HospitalisationController = exports.HospitalisationController = class HospitalisationController {
    constructor(hospitalisationService) {
        this.hospitalisationService = hospitalisationService;
    }
    create(createHospitalisationDto) {
        return this.hospitalisationService.create(createHospitalisationDto);
    }
    findAll() {
        return this.hospitalisationService.findAll();
    }
    findOne(id) {
        return this.hospitalisationService.findOne(+id);
    }
    update(id, updateHospitalisationDto) {
        return this.hospitalisationService.update(+id, updateHospitalisationDto);
    }
    remove(id) {
        return this.hospitalisationService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_hospitalisation_dto_1.CreateHospitalisationDto]),
    __metadata("design:returntype", void 0)
], HospitalisationController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HospitalisationController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HospitalisationController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_hospitalisation_dto_1.UpdateHospitalisationDto]),
    __metadata("design:returntype", void 0)
], HospitalisationController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HospitalisationController.prototype, "remove", null);
exports.HospitalisationController = HospitalisationController = __decorate([
    (0, common_1.Controller)('hospitalisation'),
    __metadata("design:paramtypes", [hospitalisation_service_1.HospitalisationService])
], HospitalisationController);
//# sourceMappingURL=hospitalisation.controller.js.map