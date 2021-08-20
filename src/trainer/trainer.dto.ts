import { IsEmail, IsEmpty, IsNotEmpty, IsPhoneNumber, IsString } from 'class-validator';
import { groups } from '../pipes/pipe-utils';
import { HttpMethod } from '../pipes';
import { TrainerEntity } from './trainer.entity';

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

    constructor(trainerEntity?: TrainerEntity) {
        this.id = trainerEntity?.id;
        this.email = trainerEntity?.email;
        this.phone = trainerEntity?.phone;
        this.first_name = trainerEntity?.first_name;
        this.last_name = trainerEntity?.last_name;
    }

    public toEntity(): TrainerEntity {
        const trainerEntity: TrainerEntity = new TrainerEntity();
        trainerEntity.id = this.id;
        trainerEntity.email = this.email;
        trainerEntity.phone = this.phone;
        trainerEntity.first_name = this.first_name;
        trainerEntity.last_name = this.last_name;
        return trainerEntity;
    }
}
