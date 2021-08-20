import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class AddTrainers1629430585882 implements MigrationInterface {
    private trainersTable = new Table({
        name: 'trainers',
        columns: [
            {
                name: 'id',
                type: 'uuid',
                isNullable: false,
                isPrimary: true,
            },
            {
                name: 'email',
                type: 'varchar',
                isNullable: false,
            },
            {
                name: 'phone',
                type: 'varchar',
                isNullable: false,
            },
            {
                name: 'first_name',
                type: 'varchar',
                isNullable: false,
            },
            {
                name: 'last_name',
                type: 'varchar',
                isNullable: false,
            },
            {
                name: 'created_at',
                type: 'timestamp',
                default: 'now()',
                isNullable: false,
            },
        ],
    });

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(this.trainersTable);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.trainersTable);
    }
}
