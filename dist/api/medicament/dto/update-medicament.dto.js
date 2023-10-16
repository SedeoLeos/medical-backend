"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMedicamentDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_medicament_dto_1 = require("./create-medicament.dto");
class UpdateMedicamentDto extends (0, mapped_types_1.PartialType)(create_medicament_dto_1.CreateMedicamentDto) {
}
exports.UpdateMedicamentDto = UpdateMedicamentDto;
//# sourceMappingURL=update-medicament.dto.js.map