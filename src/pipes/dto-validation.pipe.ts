import { ValidationPipe, ValidationPipeOptions } from '@nestjs/common';

export enum HttpMethod {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
    PATCH = 'PATCH',
}

export class DtoValidationPipe extends ValidationPipe {
    constructor(httpMethod: HttpMethod, transform: boolean = true, whitelist: boolean = true) {
        const options: ValidationPipeOptions = {
            transform,
            whitelist,
            groups: [httpMethod],
        };
        super(options);
    }
}
