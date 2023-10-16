import { ArgumentMetadata, ValidationPipe, ValidationPipeOptions } from '@nestjs/common';
export type I18nValidationPipeOptions = Omit<ValidationPipeOptions, 'exceptionFactory'>;
export declare class I18nValidationPipe extends ValidationPipe {
    constructor(options?: I18nValidationPipeOptions);
    protected toValidate(metadata: ArgumentMetadata): boolean;
}
