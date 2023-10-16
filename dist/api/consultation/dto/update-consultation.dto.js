"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateConsultationDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_consultation_dto_1 = require("./create-consultation.dto");
class UpdateConsultationDto extends (0, mapped_types_1.PartialType)(create_consultation_dto_1.CreateConsultationDto) {
}
exports.UpdateConsultationDto = UpdateConsultationDto;
//# sourceMappingURL=update-consultation.dto.js.map