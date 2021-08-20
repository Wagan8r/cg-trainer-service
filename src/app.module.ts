import { Module } from '@nestjs/common';
import { TrainerModule } from './trainer/trainer.module';

@Module({
    imports: [TrainerModule],
})
export class AppModule {}
