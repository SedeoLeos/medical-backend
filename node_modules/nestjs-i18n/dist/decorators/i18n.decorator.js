"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.I18n = void 0;
const common_1 = require("@nestjs/common");
const __1 = require("..");
exports.I18n = (0, common_1.createParamDecorator)((_, context) => {
    const i18n = __1.I18nContext.current(context);
    if (i18n == undefined) {
        if (!i18n) {
            __1.logger.error('I18n context not found! Is this function triggered by a processor or cronjob? Please use the I18nService');
        }
        throw Error('I18n context undefined');
    }
    return i18n;
});
//# sourceMappingURL=i18n.decorator.js.map