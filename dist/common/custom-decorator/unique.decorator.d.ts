import { DataSource } from 'typeorm';
import { ValidationOptions, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
export declare class UniqueConstraintTypeOrm implements ValidatorConstraintInterface {
    private dataSource;
    constructor(dataSource: DataSource);
    validate(value: any, args: ValidationArguments): Promise<boolean>;
    defaultMessage(args: ValidationArguments): string;
}
export declare function IsUniqueTypeOrm(model: string, uniqueField: string, exceptField?: string, validationOptions?: ValidationOptions): (object: any, propertyName: string) => void;
