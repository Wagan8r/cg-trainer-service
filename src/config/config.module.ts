import { DynamicModule, Module } from '@nestjs/common';
import { CONFIG_SERVICE, ConfigService } from './config.service';

@Module({})
export class ConfigModule {
    static async register(): Promise<DynamicModule> {
        await CONFIG_SERVICE.init();
        return {
            module: ConfigModule,
            providers: [
                {
                    provide: ConfigService,
                    useValue: CONFIG_SERVICE,
                },
            ],
            exports: [ConfigService],
        };
    }
}
