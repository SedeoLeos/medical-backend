import { ArgumentsHost } from '@nestjs/common';
import { I18nTranslator } from './interfaces/i18n-translator.interface';
import { I18nValidationError } from './interfaces/i18n-validation-error.interface';
import { I18nService, TranslateOptions } from './services/i18n.service';
import { Path, PathValue } from './types';
export declare class I18nContext<K = Record<string, unknown>> implements I18nTranslator<K> {
    readonly lang: string;
    readonly service: I18nService<K>;
    private static storage;
    private static counter;
    readonly id: number;
    get i18n(): I18nContext<K> | undefined;
    constructor(lang: string, service: I18nService<K>);
    translate<P extends Path<K> = any, R = PathValue<K, P>>(key: P, options?: TranslateOptions): import("./types").IfAnyOrNever<R, string, R>;
    t<P extends Path<K> = any, R = PathValue<K, P>>(key: P, options?: TranslateOptions): import("./types").IfAnyOrNever<R, string, R>;
    validate(value: any, options?: TranslateOptions): Promise<I18nValidationError[]>;
    static create(ctx: I18nContext, next: (...args: any[]) => void): void;
    static createAsync<T>(ctx: I18nContext, next: (...args: any[]) => Promise<T>): Promise<T>;
    static current<K = Record<string, unknown>>(context?: ArgumentsHost): I18nContext<K> | undefined;
}
