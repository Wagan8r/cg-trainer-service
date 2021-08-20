import { DynamicModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from './config';
import { TypeOrmConfigService } from './type-orm';
import { initializeTransactionalContext } from 'typeorm-transactional-cls-hooked';
import { TrainerModule } from './trainer';

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
export class AppModule {
    public static forRoot(): DynamicModule {
        initializeTransactionalContext();
        return {
            module: AppModule,
        };
    }
}
