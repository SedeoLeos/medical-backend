"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.I18nContext = void 0;
const async_hooks_1 = require("async_hooks");
const context_1 = require("./utils/context");
class I18nContext {
    get i18n() {
        return this;
    }
    constructor(lang, service) {
        this.lang = lang;
        this.service = service;
        this.id = I18nContext.counter++;
    }
    translate(key, options) {
        options = Object.assign({ lang: this.lang }, options);
        return this.service.translate(key, options);
    }
    t(key, options) {
        return this.translate(key, options);
    }
    validate(value, options) {
        options = Object.assign({ lang: this.lang }, options);
        return this.service.validate(value, options);
    }
    static create(ctx, next) {
        this.storage.run(ctx, next);
    }
    static async createAsync(ctx, next) {
        return this.storage.run(ctx, next);
    }
    static current(context) {
        var _a;
        const i18n = this.storage.getStore();
        if (!i18n && !!context) {
            return (_a = (0, context_1.getContextObject)(context)) === null || _a === void 0 ? void 0 : _a.i18nContext;
        }
        return i18n;
    }
}
exports.I18nContext = I18nContext;
I18nContext.storage = new async_hooks_1.AsyncLocalStorage();
I18nContext.counter = 1;
//# sourceMappingURL=i18n.context.js.map