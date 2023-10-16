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
exports.EtablissementController = void 0;
const common_1 = require("@nestjs/common");
const etablissement_service_1 = require("./etablissement.service");
const create_etablissement_dto_1 = require("./dto/create-etablissement.dto");
const update_etablissement_dto_1 = require("./dto/update-etablissement.dto");
let EtablissementController = exports.EtablissementController = class EtablissementController {
    constructor(etablissementService) {
        this.etablissementService = etablissementService;
    }
    create(createEtablissementDto) {
        return this.etablissementService.create(createEtablissementDto);
    }
    findAll() {
        return this.etablissementService.findAll();
    }
    findOne(id) {
        return this.etablissementService.findOne(+id);
    }
    update(id, updateEtablissementDto) {
        return this.etablissementService.update(+id, updateEtablissementDto);
    }
    remove(id) {
        return this.etablissementService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_etablissement_dto_1.CreateEtablissementDto]),
    __metadata("design:returntype", void 0)
], EtablissementController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EtablissementController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EtablissementController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_etablissement_dto_1.UpdateEtablissementDto]),
    __metadata("design:returntype", void 0)
], EtablissementController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EtablissementController.prototype, "remove", null);
exports.EtablissementController = EtablissementController = __decorate([
    (0, common_1.Controller)('etablissement'),
    __metadata("design:paramtypes", [etablissement_service_1.EtablissementService])
], EtablissementController);
//# sourceMappingURL=etablissement.controller.js.map