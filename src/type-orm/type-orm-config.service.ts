import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { ConfigService } from '../config';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
    constructor(private configService: ConfigService) {}

    public async createTypeOrmOptions(connectionName?: string): Promise<TypeOrmModuleOptions> {
        await this.configService.init();
        return {
            type: 'postgres',
            host: this.configService.get('DB_HOST'),
            port: this.configService.get('DB_PORT'),
            username: this.configService.get('DB_USERNAME'),
            password: this.configService.get('DB_PASSWORD'),
            database: this.configService.get('DB_DATABASE'),
            schema: this.configService.get('DB_SCHEMA'),
            entities: [__dirname + '/../**/*.entity.{ts,js}'],
            migrations: [__dirname + '/../migrations/*.{ts,js}'],
            cli: {
                migrationsDir: 'src/migrations',
            },
        };
    }
}
