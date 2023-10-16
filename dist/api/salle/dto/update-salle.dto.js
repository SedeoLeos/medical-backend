"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSalleDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_salle_dto_1 = require("./create-salle.dto");
class UpdateSalleDto extends (0, mapped_types_1.PartialType)(create_salle_dto_1.CreateSalleDto) {
}
exports.UpdateSalleDto = UpdateSalleDto;
//# sourceMappingURL=update-salle.dto.js.map