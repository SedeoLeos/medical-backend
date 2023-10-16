import { ArgumentsHost, ExceptionFilter, ValidationError } from '@nestjs/common';
import { I18nValidationError, I18nValidationException } from '../interfaces/i18n-validation-error.interface';
import { I18nValidationExceptionFilterDetailedErrorsOption, I18nValidationExceptionFilterErrorFormatterOption } from '../interfaces/i18n-validation-exception-filter.interface';
type I18nValidationExceptionFilterOptions = I18nValidationExceptionFilterDetailedErrorsOption | I18nValidationExceptionFilterErrorFormatterOption;
export declare class I18nValidationExceptionFilter implements ExceptionFilter {
    private readonly options;
    constructor(options?: I18nValidationExceptionFilterOptions);
    catch(exception: I18nValidationException, host: ArgumentsHost): I18nValidationException;
    private isWithErrorFormatter;
    protected normalizeValidationErrors(validationErrors: ValidationError[]): string[] | I18nValidationError[] | object;
    protected flattenValidationErrors(validationErrors: ValidationError[]): string[];
}
export {};
