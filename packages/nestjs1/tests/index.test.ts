import {Test} from "@nestjs/testing";
import {TestController} from "../src";
import request from 'supertest';
import {INestApplication} from "@nestjs/common";

describe('testcontroller', () => {
    describe('can ioc', () => {
        test('should', async () => {
            const moduleRef = await Test.createTestingModule({
                controllers: [TestController]
            }).compile();

            expect(moduleRef.get<TestController>(TestController)).not.toBeUndefined();
        });
    });

    describe('should do call', () => {
        let app: INestApplication;

        beforeEach(async () => {
            const moduleRef = await Test.createTestingModule({
                controllers: [TestController]
            }).compile();

            app = moduleRef.createNestApplication();
            await app.init();
        });

        afterEach(async () => {
            await app.close();
        });

        it(`/POST test`, () => {
            const newVar = {here: true};
            return request(app.getHttpServer())
                .post('/test')
                .send(newVar)
                .expect(200)
                .expect(newVar);
        });
    });
})
