"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usingFastify = exports.isNestMiddleware = exports.formatI18nErrors = exports.i18nValidationMessage = exports.i18nValidationErrorFactory = exports.shouldResolve = void 0;
const i18n_validation_error_interface_1 = require("../interfaces/i18n-validation-error.interface");
function shouldResolve(e) {
    return typeof e === 'function' || e['use'];
}
exports.shouldResolve = shouldResolve;
function validationErrorToI18n(e) {
    var _a;
    return {
        property: e.property,
        children: (_a = e === null || e === void 0 ? void 0 : e.children) === null || _a === void 0 ? void 0 : _a.map(validationErrorToI18n),
        constraints: !!e.constraints
            ? Object.keys(e.constraints).reduce((result, key) => {
                result[key] = e.constraints[key];
                return result;
            }, {})
            : {},
    };
}
function i18nValidationErrorFactory(errors) {
    return new i18n_validation_error_interface_1.I18nValidationException(errors.map((e) => {
        return validationErrorToI18n(e);
    }));
}
exports.i18nValidationErrorFactory = i18nValidationErrorFactory;
function i18nValidationMessage(key, args) {
    return (a) => {
        const { constraints } = a;
        let { value } = a;
        if (typeof value === 'string') {
            value = value.replace(/\|/g, '');
        }
        return `${key}|${JSON.stringify(Object.assign({ value, constraints }, args))}`;
    };
}
exports.i18nValidationMessage = i18nValidationMessage;
function formatI18nErrors(errors, i18n, options) {
    return errors.map((error) => {
        var _a;
        error.children = formatI18nErrors((_a = error.children) !== null && _a !== void 0 ? _a : [], i18n, options);
        error.constraints = Object.keys(error.constraints).reduce((result, key) => {
            const [translationKey, argsString] = error.constraints[key].split('|');
            const args = !!argsString ? JSON.parse(argsString) : {};
            result[key] = i18n.translate(translationKey, Object.assign(Object.assign({}, options), { args: Object.assign({ property: error.property }, args) }));
            return result;
        }, {});
        return error;
    });
}
exports.formatI18nErrors = formatI18nErrors;
const isNestMiddleware = (consumer) => {
    return typeof consumer.httpAdapter === 'object';
};
exports.isNestMiddleware = isNestMiddleware;
const usingFastify = (consumer) => {
    return consumer.httpAdapter.constructor.name
        .toLowerCase()
        .startsWith('fastify');
};
exports.usingFastify = usingFastify;
//# sourceMappingURL=util.js.map