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
exports.ExamenController = void 0;
const common_1 = require("@nestjs/common");
const examen_service_1 = require("./examen.service");
const create_examan_dto_1 = require("./dto/create-examan.dto");
const update_examan_dto_1 = require("./dto/update-examan.dto");
let ExamenController = exports.ExamenController = class ExamenController {
    constructor(examenService) {
        this.examenService = examenService;
    }
    create(createExamanDto) {
        return this.examenService.create(createExamanDto);
    }
    findAll() {
        return this.examenService.findAll();
    }
    findOne(id) {
        return this.examenService.findOne(+id);
    }
    update(id, updateExamanDto) {
        return this.examenService.update(+id, updateExamanDto);
    }
    remove(id) {
        return this.examenService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_examan_dto_1.CreateExamanDto]),
    __metadata("design:returntype", void 0)
], ExamenController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ExamenController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ExamenController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_examan_dto_1.UpdateExamanDto]),
    __metadata("design:returntype", void 0)
], ExamenController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ExamenController.prototype, "remove", null);
exports.ExamenController = ExamenController = __decorate([
    (0, common_1.Controller)('examen'),
    __metadata("design:paramtypes", [examen_service_1.ExamenService])
], ExamenController);
//# sourceMappingURL=examen.controller.js.map