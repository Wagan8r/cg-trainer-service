import { Injectable } from '@nestjs/common';
import { config } from 'dotenv';
import { Configuration, Secrets } from './configuration';

@Injectable()
export class ConfigService {
    private internalConfig: Configuration;

    public async init(): Promise<void> {
        if (!this.internalConfig) {
            config();
            const secrets: Secrets = {
                DB_HOST: process.env.DB_HOST,
                DB_PASSWORD: process.env.DB_PASSWORD,
            };
            this.internalConfig = {
                PORT: parseInt(process.env.PORT),
                DB_PORT: parseInt(process.env.DB_PORT),
                DB_HOST: secrets.DB_HOST,
                DB_USERNAME: process.env.DB_USERNAME,
                DB_PASSWORD: secrets.DB_PASSWORD,
                DB_DATABASE: process.env.DB_DATABASE,
                DB_SCHEMA: process.env.DB_SCHEMA,
                LOG_LEVEL: process.env.LOG_LEVEL,
                DISABLE_LOGGING: process.env.DISABLE_LOGGING === 'true',
            };
        }
    }

    public get<T extends keyof Configuration>(envVar: T): Configuration[T] {
        if (this.internalConfig) {
            return this.internalConfig[envVar];
        }
        throw new Error('Configuration has not been loaded. Call init() first');
    }
}

export const CONFIG_SERVICE: ConfigService = new ConfigService();
