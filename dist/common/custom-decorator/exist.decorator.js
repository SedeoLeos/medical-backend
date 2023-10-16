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
exports.IsExistTypeOrm = exports.ExistConstraintTypeOrm = void 0;
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
const common_1 = require("@nestjs/common");
let ExistConstraintTypeOrm = exports.ExistConstraintTypeOrm = class ExistConstraintTypeOrm {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
    async validate(value, args) {
        const [model, property = 'id'] = args.constraints;
        if (!value || !model)
            return false;
        const repository = this.dataSource.getRepository(model);
        try {
            console.log('gggggggggg', [property], value);
            const record = await repository.findOne({
                where: {
                    [property]: value,
                },
            });
            return record !== null;
        }
        catch (e) {
            console.error(e);
            return false;
        }
    }
    defaultMessage(args) {
        const [model, property = 'id', exceptField = null] = args.constraints;
        return ` this ${args.property} don't exist in table ${model}`;
    }
};
exports.ExistConstraintTypeOrm = ExistConstraintTypeOrm = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: 'Exist', async: true }),
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], ExistConstraintTypeOrm);
function IsExistTypeOrm(model, uniqueField, validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [model, uniqueField],
            validator: ExistConstraintTypeOrm,
        });
    };
}
exports.IsExistTypeOrm = IsExistTypeOrm;
//# sourceMappingURL=exist.decorator.js.map