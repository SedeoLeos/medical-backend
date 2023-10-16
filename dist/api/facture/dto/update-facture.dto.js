"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFactureDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_facture_dto_1 = require("./create-facture.dto");
class UpdateFactureDto extends (0, mapped_types_1.PartialType)(create_facture_dto_1.CreateFactureDto) {
}
exports.UpdateFactureDto = UpdateFactureDto;
//# sourceMappingURL=update-facture.dto.js.map