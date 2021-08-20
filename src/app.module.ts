import { Module } from '@nestjs/common';
import { TrainerModule } from './trainer/trainer.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from './config';
import { TypeOrmConfigService } from './type-orm';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule.register()],
            useClass: TypeOrmConfigService,
        }),
        ConfigModule.register(),
        TrainerModule,
    ],
})
export class AppModule {}
