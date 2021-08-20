import { IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber, IsString, IsUUID } from 'class-validator';

export class Trainer {
    @IsUUID(4)
    @IsOptional()
    public id?: string;

    @IsEmail()
    @IsNotEmpty()
    public email: string;

    @IsPhoneNumber()
    @IsNotEmpty()
    public phone: string;

    @IsString()
    @IsNotEmpty()
    public first_name: string;

    @IsString()
    @IsNotEmpty()
    public last_name: string;
}
