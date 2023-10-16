"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEtablissementDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_etablissement_dto_1 = require("./create-etablissement.dto");
class UpdateEtablissementDto extends (0, mapped_types_1.PartialType)(create_etablissement_dto_1.CreateEtablissementDto) {
}
exports.UpdateEtablissementDto = UpdateEtablissementDto;
//# sourceMappingURL=update-etablissement.dto.js.map