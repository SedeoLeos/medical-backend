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
exports.MedicamentController = void 0;
const common_1 = require("@nestjs/common");
const medicament_service_1 = require("./medicament.service");
const create_medicament_dto_1 = require("./dto/create-medicament.dto");
const update_medicament_dto_1 = require("./dto/update-medicament.dto");
let MedicamentController = exports.MedicamentController = class MedicamentController {
    constructor(medicamentService) {
        this.medicamentService = medicamentService;
    }
    create(createMedicamentDto) {
        return this.medicamentService.create(createMedicamentDto);
    }
    findAll() {
        return this.medicamentService.findAll();
    }
    findOne(id) {
        return this.medicamentService.findOne(+id);
    }
    update(id, updateMedicamentDto) {
        return this.medicamentService.update(+id, updateMedicamentDto);
    }
    remove(id) {
        return this.medicamentService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_medicament_dto_1.CreateMedicamentDto]),
    __metadata("design:returntype", void 0)
], MedicamentController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MedicamentController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MedicamentController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_medicament_dto_1.UpdateMedicamentDto]),
    __metadata("design:returntype", void 0)
], MedicamentController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MedicamentController.prototype, "remove", null);
exports.MedicamentController = MedicamentController = __decorate([
    (0, common_1.Controller)('medicament'),
    __metadata("design:paramtypes", [medicament_service_1.MedicamentService])
], MedicamentController);
//# sourceMappingURL=medicament.controller.js.map