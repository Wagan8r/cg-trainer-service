import { IsEmail, IsEmpty, IsNotEmpty, IsPhoneNumber, IsString } from 'class-validator';
import { groups } from '../pipes/pipe-utils';
import { HttpMethod } from '../pipes';

export class Trainer {
    @IsEmpty(groups(HttpMethod.POST))
    public id?: string;

    @IsEmail({}, groups(HttpMethod.POST))
    @IsNotEmpty(groups(HttpMethod.POST))
    public email: string;

    @IsPhoneNumber('US', groups(HttpMethod.POST))
    @IsNotEmpty(groups(HttpMethod.POST))
    public phone: string;

    @IsString(groups(HttpMethod.POST))
    @IsNotEmpty(groups(HttpMethod.POST))
    public first_name: string;

    @IsString(groups(HttpMethod.POST))
    @IsNotEmpty(groups(HttpMethod.POST))
    public last_name: string;
}
