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
            expect(trainer.phone).toEqual('720456789');
            expect(trainer.first_name).toEqual('GOB');
            expect(trainer.last_name).toEqual('Bluth');
        });
    });

    describe('/trainers (POST)', () => {
        let trainer: Trainer;

        beforeEach(() => {
            trainer = {
                email: 'michael@bananastand.com',
                phone: '3036543210',
                first_name: 'Michael',
                last_name: 'Bluth',
            };
        });

        it('should create a trainer', async () => {
            const responseTrainer: Trainer = await apiUtils.postTrainer(trainer);

            expect(responseTrainer.id).toBeTruthy();
            expect(responseTrainer.email).toEqual('michael@bananastand.com');
            expect(responseTrainer.phone).toEqual('3036543210');
            expect(responseTrainer.first_name).toEqual('Michael');
            expect(responseTrainer.last_name).toEqual('Bluth');
        });
    });

    describe('input validations', () => {
        let trainer: Trainer;

        beforeEach(() => {
            trainer = {
                email: 'michael@bananastand.com',
                phone: '3036543210',
                first_name: 'Michael',
                last_name: 'Bluth',
            };
        });

        describe('on POST requests', () => {
            it('should throw an error if an ID is supplied', async () => {
                trainer.id = uuidv4();
                const response = await apiUtils.postTrainerRaw(trainer);
                expect(response.status).toBe(400);
                expect(response.body.message).toHaveLength(1);
                expect(response.body.message[0]).toEqual('id must be empty');
            });

            it('should throw an error if the email is empty', async () => {
                trainer.email = '';
                const response = await apiUtils.postTrainerRaw(trainer);
                expect(response.status).toBe(400);
                expect(response.body.message).toHaveLength(2);
                expect(response.body.message[0]).toEqual('email should not be empty');
                expect(response.body.message[1]).toEqual('email must be an email');
            });

            it('should throw an error if the email is invalid', async () => {
                trainer.email = 'gob@bananastand.';
                const response = await apiUtils.postTrainerRaw(trainer);
                expect(response.status).toBe(400);
                expect(response.body.message).toHaveLength(1);
                expect(response.body.message[0]).toEqual('email must be an email');
            });

            it('should throw an error if the phone is empty', async () => {
                trainer.phone = '';
                const response = await apiUtils.postTrainerRaw(trainer);
                expect(response.status).toBe(400);
                expect(response.body.message).toHaveLength(2);
                expect(response.body.message[0]).toEqual('phone should not be empty');
                expect(response.body.message[1]).toEqual('phone must be a valid phone number');
            });

            it('should throw an error if the phone is invalid', async () => {
                trainer.phone = '9876543210';
                const response = await apiUtils.postTrainerRaw(trainer);
                expect(response.status).toBe(400);
                expect(response.body.message).toHaveLength(1);
                expect(response.body.message[0]).toEqual('phone must be a valid phone number');
            });

            it('should throw an error if the first_name is empty', async () => {
                trainer.first_name = '';
                const response = await apiUtils.postTrainerRaw(trainer);
                expect(response.status).toBe(400);
                expect(response.body.message).toHaveLength(1);
                expect(response.body.message[0]).toEqual('first_name should not be empty');
            });

            it('should throw an error if the first_name is invalid', async () => {
                trainer.first_name = <string>(<unknown>1231234);
                const response = await apiUtils.postTrainerRaw(trainer);
                expect(response.status).toBe(400);
                expect(response.body.message).toHaveLength(1);
                expect(response.body.message[0]).toEqual('first_name must be a string');
            });

            it('should throw an error if the last_name is empty', async () => {
                trainer.last_name = '';
                const response = await apiUtils.postTrainerRaw(trainer);
                expect(response.status).toBe(400);
                expect(response.body.message).toHaveLength(1);
                expect(response.body.message[0]).toEqual('last_name should not be empty');
            });

            it('should throw an error if the last_name is invalid', async () => {
                trainer.last_name = <string>(<unknown>1231234);
                const response = await apiUtils.postTrainerRaw(trainer);
                expect(response.status).toBe(400);
                expect(response.body.message).toHaveLength(1);
                expect(response.body.message[0]).toEqual('last_name must be a string');
            });
        });
    });
});
