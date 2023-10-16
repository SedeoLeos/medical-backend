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
exports.ChirugieController = void 0;
const common_1 = require("@nestjs/common");
const chirugie_service_1 = require("./chirugie.service");
const create_chirugie_dto_1 = require("./dto/create-chirugie.dto");
const update_chirugie_dto_1 = require("./dto/update-chirugie.dto");
let ChirugieController = exports.ChirugieController = class ChirugieController {
    constructor(chirugieService) {
        this.chirugieService = chirugieService;
    }
    create(createChirugieDto) {
        return this.chirugieService.create(createChirugieDto);
    }
    findAll() {
        return this.chirugieService.findAll();
    }
    findOne(id) {
        return this.chirugieService.findOne(+id);
    }
    update(id, updateChirugieDto) {
        return this.chirugieService.update(+id, updateChirugieDto);
    }
    remove(id) {
        return this.chirugieService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_chirugie_dto_1.CreateChirugieDto]),
    __metadata("design:returntype", void 0)
], ChirugieController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ChirugieController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ChirugieController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_chirugie_dto_1.UpdateChirugieDto]),
    __metadata("design:returntype", void 0)
], ChirugieController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ChirugieController.prototype, "remove", null);
exports.ChirugieController = ChirugieController = __decorate([
    (0, common_1.Controller)('chirugie'),
    __metadata("design:paramtypes", [chirugie_service_1.ChirugieService])
], ChirugieController);
//# sourceMappingURL=chirugie.controller.js.map