"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContextObject = void 0;
const common_1 = require("@nestjs/common");
const logger = new common_1.Logger('I18nService');
function getContextObject(context) {
    var _a;
    const contextType = (_a = context === null || context === void 0 ? void 0 : context.getType()) !== null && _a !== void 0 ? _a : 'undefined';
    switch (contextType) {
        case 'http':
            return context.switchToHttp().getRequest();
        case 'graphql':
            return context.getArgs()[2];
        case 'rpc':
            return context.switchToRpc().getContext();
        default:
            logger.warn(`context type: ${contextType} not supported`);
    }
}
exports.getContextObject = getContextObject;
//# sourceMappingURL=context.js.map