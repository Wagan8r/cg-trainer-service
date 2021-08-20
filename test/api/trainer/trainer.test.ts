import { Test } from '@nestjs/testing';
import { AppModule } from '../../../src/app.module';
import { INestApplication } from '@nestjs/common';
import { ApiUtils } from '../../api-utils';
import { v4 as uuidv4 } from 'uuid';
import { Trainer } from '../../../src/trainer';

describe('The TrainerController V1 API', () => {
    let app: INestApplication;
    let apiUtils: ApiUtils;

    beforeAll(async () => {
        jest.setTimeout(100000);

        const moduleFixture = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        apiUtils = new ApiUtils(app);
        await app.init();
    });

    afterAll(async () => {
        await app.close();
    });

    describe('/trainers (GET)', () => {
        it('should return a trainer', async () => {
            const trainer: Trainer = await apiUtils.getTrainer(uuidv4());

            expect(trainer.id).toBeTruthy();
            expect(trainer.email).toEqual('gob@bananastand.com');
            expect(trainer.phone).toEqual('123456789');
            expect(trainer.first_name).toEqual('GOB');
            expect(trainer.last_name).toEqual('Bluth');
        });
    });
});
