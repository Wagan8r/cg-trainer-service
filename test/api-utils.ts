import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { Trainer } from '../src/trainer';

export class ApiUtils {
    constructor(private app: INestApplication) {}

    public get(url): request.Test {
        return request(this.app.getHttpServer()).get(url);
    }

    public async getTrainer(id: string): Promise<Trainer> {
        const response = await this.get(`/v1/trainers/${id}`);
        return <Trainer>response.body;
    }
}
