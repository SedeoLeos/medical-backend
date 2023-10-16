"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOrdonanceDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_ordonance_dto_1 = require("./create-ordonance.dto");
class UpdateOrdonanceDto extends (0, mapped_types_1.PartialType)(create_ordonance_dto_1.CreateOrdonanceDto) {
}
exports.UpdateOrdonanceDto = UpdateOrdonanceDto;
//# sourceMappingURL=update-ordonance.dto.js.map