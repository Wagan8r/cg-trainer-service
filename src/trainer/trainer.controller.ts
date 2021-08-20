import { Body, Controller, Get, Param, ParseUUIDPipe, Post } from '@nestjs/common';
import { Trainer } from './trainer.dto';
import { v4 as uuidv4 } from 'uuid';
import { DtoValidationPipe, HttpMethod } from '../pipes';

@Controller('/v1/trainers')
export class TrainerController {
    @Get('/:id')
    public async getTrainer(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string): Promise<Trainer> {
        return {
            id: uuidv4(),
            email: 'gob@bananastand.com',
            phone: '720456789',
            first_name: 'GOB',
            last_name: 'Bluth',
        };
    }

    @Post()
    public async createTrainer(@Body(new DtoValidationPipe(HttpMethod.POST)) trainer: Trainer): Promise<Trainer> {
        trainer.id = uuidv4();
        return trainer;
    }
}
