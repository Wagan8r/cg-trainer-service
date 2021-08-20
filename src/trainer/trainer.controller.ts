import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { Trainer } from './trainer.dto';
import { v4 as uuidv4 } from 'uuid';

@Controller('/v1/trainers')
export class TrainerController {
    @Get('/:id')
    public async getTrainer(@Param('id', ParseUUIDPipe) id: string): Promise<Trainer> {
        return {
            id: uuidv4(),
            email: 'gob@bananastand.com',
            phone: '123456789',
            first_name: 'GOB',
            last_name: 'Bluth',
        };
    }
}
