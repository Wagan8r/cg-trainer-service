import { Injectable, NotFoundException } from '@nestjs/common';
import { TrainerRepository } from './trainer.repository';
import { Trainer } from './trainer.dto';
import { TrainerEntity } from './trainer.entity';

@Injectable()
export class TrainerService {
    constructor(private trainerRepository: TrainerRepository) {}

    public async create(trainer: Trainer): Promise<Trainer> {
        const trainerEntity: TrainerEntity = await this.trainerRepository.save(trainer.toEntity());
        return new Trainer(trainerEntity);
    }

    public async get(id: string): Promise<Trainer> {
        let trainerEntity: TrainerEntity;
        try {
            trainerEntity = await this.trainerRepository.findOneOrFail(id);
        } catch (e) {
            throw new NotFoundException(`No trainer found for id: ${id}`);
        }
        return new Trainer(trainerEntity);
    }
}
