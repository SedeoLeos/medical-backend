"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePlanningDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_planning_dto_1 = require("./create-planning.dto");
class UpdatePlanningDto extends (0, mapped_types_1.PartialType)(create_planning_dto_1.CreatePlanningDto) {
}
exports.UpdatePlanningDto = UpdatePlanningDto;
//# sourceMappingURL=update-planning.dto.js.map