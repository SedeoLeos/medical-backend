import { Logger, OnModuleDestroy } from '@nestjs/common';
import { I18nOptions, I18nValidationError } from '..';
import { I18nTranslation } from '../interfaces/i18n-translation.interface';
import { Observable, BehaviorSubject } from 'rxjs';
import { I18nLoader } from '../loaders/i18n.loader';
import { IfAnyOrNever, Path, PathValue } from '../types';
import { I18nTranslator } from '../interfaces/i18n-translator.interface';
export type TranslateOptions = {
    lang?: string;
    args?: ({
        [k: string]: any;
    } | string)[] | {
        [k: string]: any;
    };
    defaultValue?: string;
    debug?: boolean;
};
export declare class I18nService<K = Record<string, unknown>> implements I18nTranslator<K>, OnModuleDestroy {
    protected readonly i18nOptions: I18nOptions;
    private readonly logger;
    private readonly loader;
    private readonly languagesSubject;
    private readonly translationsSubject;
    private supportedLanguages;
    private translations;
    private pluralRules;
    private unsubscribe;
    constructor(i18nOptions: I18nOptions, translations: Observable<I18nTranslation>, supportedLanguages: Observable<string[]>, logger: Logger, loader: I18nLoader, languagesSubject: BehaviorSubject<string[]>, translationsSubject: BehaviorSubject<I18nTranslation>);
    onModuleDestroy(): void;
    translate<P extends Path<K> = any, R = PathValue<K, P>>(key: P, options?: TranslateOptions): IfAnyOrNever<R, string, R>;
    private getFallbackLanguage;
    t<P extends Path<K> = any, R = PathValue<K, P>>(key: P, options?: TranslateOptions): IfAnyOrNever<R, string, R>;
    getSupportedLanguages(): string[];
    getTranslations(): I18nTranslation;
    refresh(translations?: I18nTranslation | Observable<I18nTranslation>, languages?: string[] | Observable<string[]>): Promise<void>;
    hbsHelper: <P extends Path<K> = any>(key: P, args: any, options: any) => IfAnyOrNever<PathValue<K, P>, string, PathValue<K, P>>;
    private translateObject;
    resolveLanguage(lang: string): string;
    private getPluralObject;
    private getNestedTranslations;
    validate(value: any, options?: TranslateOptions): Promise<I18nValidationError[]>;
}
