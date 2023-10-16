"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.I18nLang = void 0;
const common_1 = require("@nestjs/common");
const i18n_context_1 = require("../i18n.context");
exports.I18nLang = (0, common_1.createParamDecorator)((data, context) => {
    const i18n = i18n_context_1.I18nContext.current(context);
    return i18n.lang;
});
//# sourceMappingURL=i18n-lang.decorator.js.map