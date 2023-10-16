"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChirugieService = void 0;
const common_1 = require("@nestjs/common");
let ChirugieService = exports.ChirugieService = class ChirugieService {
    create(createChirugieDto) {
        return 'This action adds a new chirugie';
    }
    findAll() {
        return `This action returns all chirugie`;
    }
    findOne(id) {
        return `This action returns a #${id} chirugie`;
    }
    update(id, updateChirugieDto) {
        return `This action updates a #${id} chirugie`;
    }
    remove(id) {
        return `This action removes a #${id} chirugie`;
    }
};
exports.ChirugieService = ChirugieService = __decorate([
    (0, common_1.Injectable)()
], ChirugieService);
//# sourceMappingURL=chirugie.service.js.map