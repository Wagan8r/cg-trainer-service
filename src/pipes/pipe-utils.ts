import { HttpMethod } from './dto-validation.pipe';
import { ValidationOptions } from 'class-validator';

export function groups(...httpMethods: HttpMethod[]): ValidationOptions {
    return {
        groups: httpMethods,
    };
}
