import { DataSource } from 'typeorm';
import { ValidationOptions, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
export declare class ExistConstraintTypeOrm implements ValidatorConstraintInterface {
    private dataSource;
    constructor(dataSource: DataSource);
    validate(value: any, args: ValidationArguments): Promise<boolean>;
    defaultMessage(args: ValidationArguments): string;
}
export declare function IsExistTypeOrm(model: string, uniqueField: string, validationOptions?: ValidationOptions): (object: any, propertyName: string) => void;
