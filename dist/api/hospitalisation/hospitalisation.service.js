"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HospitalisationService = void 0;
const common_1 = require("@nestjs/common");
let HospitalisationService = exports.HospitalisationService = class HospitalisationService {
    create(createHospitalisationDto) {
        return 'This action adds a new hospitalisation';
    }
    findAll() {
        return `This action returns all hospitalisation`;
    }
    findOne(id) {
        return `This action returns a #${id} hospitalisation`;
    }
    update(id, updateHospitalisationDto) {
        return `This action updates a #${id} hospitalisation`;
    }
    remove(id) {
        return `This action removes a #${id} hospitalisation`;
    }
};
exports.HospitalisationService = HospitalisationService = __decorate([
    (0, common_1.Injectable)()
], HospitalisationService);
//# sourceMappingURL=hospitalisation.service.js.map