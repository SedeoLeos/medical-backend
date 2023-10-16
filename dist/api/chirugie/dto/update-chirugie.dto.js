"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateChirugieDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_chirugie_dto_1 = require("./create-chirugie.dto");
class UpdateChirugieDto extends (0, mapped_types_1.PartialType)(create_chirugie_dto_1.CreateChirugieDto) {
}
exports.UpdateChirugieDto = UpdateChirugieDto;
//# sourceMappingURL=update-chirugie.dto.js.map