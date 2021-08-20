import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { Trainer } from '../src/trainer';

export class ApiUtils {
    constructor(private app: INestApplication) {}

    public get(url): request.Test {
        return request(this.app.getHttpServer()).get(url);
    }

    public post(url: string, payload: any): request.Test {
        return request(this.app.getHttpServer()).post(url).send(payload);
    }

    public getTrainerRaw(id: string): request.Test {
        return this.get(`/v1/trainers/${id}`);
    }

    public async getTrainer(id: string): Promise<Trainer> {
        const response = await this.getTrainerRaw(id);
        return <Trainer>response.body;
    }

    public postTrainerRaw(trainer: Trainer): request.Test {
        return this.post('/v1/trainers', trainer);
    }

    public async postTrainer(trainer: Trainer): Promise<Trainer> {
        const response = await this.postTrainerRaw(trainer);
        return <Trainer>response.body;
    }
}
