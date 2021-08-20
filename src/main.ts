import { NestFactory } from '@nestjs/core';
import { INestApplication } from '@nestjs/common';
import { AppModule } from './app.module';
import { CONFIG_SERVICE } from './config';

async function bootstrap(): Promise<void> {
    await CONFIG_SERVICE.init();
    const app: INestApplication = await NestFactory.create(AppModule.forRoot());
    await app.listen(8080);
}

bootstrap();
