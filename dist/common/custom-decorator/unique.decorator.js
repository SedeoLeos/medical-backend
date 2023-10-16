"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsUniqueTypeOrm = exports.UniqueConstraintTypeOrm = void 0;
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
const common_1 = require("@nestjs/common");
let UniqueConstraintTypeOrm = exports.UniqueConstraintTypeOrm = class UniqueConstraintTypeOrm {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
    async validate(value, args) {
        const [model, property = 'id', exceptField = null] = args.constraints;
        if (!value || !model)
            return false;
        const repository = this.dataSource.getRepository(model);
        try {
            const record = await repository.findOne({
                where: {
                    [property]: value,
                },
            });
            if (record === null)
                return true;
            if (!exceptField)
                return false;
            const exceptFieldValue = args.object[exceptField];
            if (!exceptFieldValue)
                return false;
            return record[exceptField] === exceptFieldValue;
        }
        catch (e) {
            console.error(e);
            return false;
        }
    }
    defaultMessage(args) {
        const [model, property = 'id', exceptField = null] = args.constraints;
        return ` this ${args.property} exist in table ${model}`;
    }
};
exports.UniqueConstraintTypeOrm = UniqueConstraintTypeOrm = __decorate([
    (0, common_1.Injectable)(),
    (0, class_validator_1.ValidatorConstraint)({ name: 'Unique', async: true }),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], UniqueConstraintTypeOrm);
function IsUniqueTypeOrm(model, uniqueField, exceptField = null, validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [model, uniqueField, exceptField],
            validator: UniqueConstraintTypeOrm,
        });
    };
}
exports.IsUniqueTypeOrm = IsUniqueTypeOrm;
//# sourceMappingURL=unique.decorator.js.map