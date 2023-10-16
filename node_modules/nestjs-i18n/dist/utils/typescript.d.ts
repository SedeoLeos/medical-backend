import * as ts from 'typescript';
export declare const convertObjectToTypeDefinition: (object: any) => Promise<ts.TypeElement[]>;
export declare const createTypesFile: (object: any) => Promise<string>;
export declare const annotateSourceCode: (code: string) => string;
