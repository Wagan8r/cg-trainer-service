import { Body, Controller, Get, Param, ParseUUIDPipe, Post } from '@nestjs/common';
import { Trainer } from './trainer.dto';
import { DtoValidationPipe, HttpMethod } from '../pipes';
import { TrainerService } from './trainer.service';
import { Transactional } from 'typeorm-transactional-cls-hooked';

@Controller('/v1/trainers')
export class TrainerController {
    constructor(private trainerService: TrainerService) {}

    @Get('/:id')
    @Transactional()
    public async getTrainer(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string): Promise<Trainer> {
        return this.trainerService.get(id);
    }

    @Post()
    @Transactional()
    public async createTrainer(@Body(new DtoValidationPipe(HttpMethod.POST)) trainer: Trainer): Promise<Trainer> {
        return this.trainerService.create(trainer);
    }
}
