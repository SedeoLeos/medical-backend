"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateExamanDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_examan_dto_1 = require("./create-examan.dto");
class UpdateExamanDto extends (0, mapped_types_1.PartialType)(create_examan_dto_1.CreateExamanDto) {
}
exports.UpdateExamanDto = UpdateExamanDto;
//# sourceMappingURL=update-examan.dto.js.map