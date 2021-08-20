import { Module } from '@nestjs/common';
import { TrainerController } from './trainer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrainerEntity } from './trainer.entity';
import { TrainerRepository } from './trainer.repository';
import { TrainerService } from './trainer.service';

@Module({
    imports: [TypeOrmModule.forFeature([TrainerEntity, TrainerRepository])],
    providers: [TrainerService],
    controllers: [TrainerController],
})
export class TrainerModule {}
