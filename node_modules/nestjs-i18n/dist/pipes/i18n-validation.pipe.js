"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.I18nValidationPipe = void 0;
const common_1 = require("@nestjs/common");
const i18n_context_1 = require("../i18n.context");
const util_1 = require("../utils/util");
class I18nValidationPipe extends common_1.ValidationPipe {
    constructor(options) {
        super(Object.assign(Object.assign({}, options), { exceptionFactory: util_1.i18nValidationErrorFactory }));
    }
    toValidate(metadata) {
        const { metatype } = metadata;
        return metatype !== i18n_context_1.I18nContext && super.toValidate(metadata);
    }
}
exports.I18nValidationPipe = I18nValidationPipe;
//# sourceMappingURL=i18n-validation.pipe.js.map