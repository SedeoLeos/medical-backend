"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContextObject = exports.i18nValidationMessage = exports.i18nValidationErrorFactory = exports.I18nMiddleware = exports.I18N_LOADER_OPTIONS = exports.I18N_RESOLVERS = exports.I18N_RESOLVER_OPTIONS = exports.I18N_LANGUAGES = exports.I18N_TRANSLATIONS = exports.I18N_OPTIONS = void 0;
__exportStar(require("./i18n.module"), exports);
var i18n_constants_1 = require("./i18n.constants");
Object.defineProperty(exports, "I18N_OPTIONS", { enumerable: true, get: function () { return i18n_constants_1.I18N_OPTIONS; } });
Object.defineProperty(exports, "I18N_TRANSLATIONS", { enumerable: true, get: function () { return i18n_constants_1.I18N_TRANSLATIONS; } });
Object.defineProperty(exports, "I18N_LANGUAGES", { enumerable: true, get: function () { return i18n_constants_1.I18N_LANGUAGES; } });
Object.defineProperty(exports, "I18N_RESOLVER_OPTIONS", { enumerable: true, get: function () { return i18n_constants_1.I18N_RESOLVER_OPTIONS; } });
Object.defineProperty(exports, "I18N_RESOLVERS", { enumerable: true, get: function () { return i18n_constants_1.I18N_RESOLVERS; } });
Object.defineProperty(exports, "I18N_LOADER_OPTIONS", { enumerable: true, get: function () { return i18n_constants_1.I18N_LOADER_OPTIONS; } });
__exportStar(require("./i18n.context"), exports);
__exportStar(require("./services/i18n.service"), exports);
__exportStar(require("./interfaces/i18n-options.interface"), exports);
__exportStar(require("./interfaces/i18n-language-resolver.interface"), exports);
__exportStar(require("./interfaces/i18n-translation.interface"), exports);
__exportStar(require("./interfaces/i18n-validation-error.interface"), exports);
__exportStar(require("./decorators/i18n-lang.decorator"), exports);
__exportStar(require("./decorators/i18n-languages.decorator"), exports);
__exportStar(require("./decorators/i18n-resolver-options.decorator"), exports);
__exportStar(require("./decorators/i18n.decorator"), exports);
__exportStar(require("./resolvers/header.resolver"), exports);
__exportStar(require("./resolvers/accept-language.resolver"), exports);
__exportStar(require("./resolvers/query.resolver"), exports);
__exportStar(require("./resolvers/cookie.resolver"), exports);
__exportStar(require("./resolvers/graphql-websocket.resolver"), exports);
__exportStar(require("./resolvers/grpc-metadata.resolver"), exports);
__exportStar(require("./loaders/i18n.loader"), exports);
__exportStar(require("./loaders/i18n.json.loader"), exports);
__exportStar(require("./loaders/i18n.yaml.loader"), exports);
__exportStar(require("./interceptors/i18n-language.interceptor"), exports);
__exportStar(require("./filters/i18n-validation-exception.filter"), exports);
var i18n_middleware_1 = require("./middlewares/i18n.middleware");
Object.defineProperty(exports, "I18nMiddleware", { enumerable: true, get: function () { return i18n_middleware_1.I18nMiddleware; } });
__exportStar(require("./pipes/i18n-validation.pipe"), exports);
var util_1 = require("./utils/util");
Object.defineProperty(exports, "i18nValidationErrorFactory", { enumerable: true, get: function () { return util_1.i18nValidationErrorFactory; } });
Object.defineProperty(exports, "i18nValidationMessage", { enumerable: true, get: function () { return util_1.i18nValidationMessage; } });
var context_1 = require("./utils/context");
Object.defineProperty(exports, "getContextObject", { enumerable: true, get: function () { return context_1.getContextObject; } });
//# sourceMappingURL=index.js.map