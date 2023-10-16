"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateHospitalisationDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_hospitalisation_dto_1 = require("./create-hospitalisation.dto");
class UpdateHospitalisationDto extends (0, mapped_types_1.PartialType)(create_hospitalisation_dto_1.CreateHospitalisationDto) {
}
exports.UpdateHospitalisationDto = UpdateHospitalisationDto;
//# sourceMappingURL=update-hospitalisation.dto.js.map