import { CONFIG_SERVICE } from '../../src/config';
import { Connection, ConnectionOptions, createConnection } from 'typeorm';
import { TypeOrmConfigService } from '../../src/type-orm';

describe('The DB Migrations', () => {
    let connection: Connection;

    beforeAll(async () => {
        jest.setTimeout(10000);
        const typeOrmConfigService: TypeOrmConfigService = new TypeOrmConfigService(CONFIG_SERVICE);
        const connectionOptions: ConnectionOptions = <ConnectionOptions>{
            ...(await typeOrmConfigService.createTypeOrmOptions()),
            logging: 'all',
        };
        connection = await createConnection(connectionOptions);
    });

    afterAll(async () => {
        await connection.close();
        jest.setTimeout(5000);
    });

    it('should successfully migrate the db', async () => {
        await connection.runMigrations({ transaction: 'none' });
    });

    it('should successfully revert the db', async () => {
        for (let i = 0; i < connection.migrations.length; i++) {
            await connection.undoLastMigration({ transaction: 'none' });
        }
    });
});
