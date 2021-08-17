import {MigrationInterface, QueryRunner} from "typeorm";

export class nameProduct1629181878522 implements MigrationInterface {
    name = 'nameProduct1629181878522'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."Products" ADD "name" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."Products" DROP COLUMN "name"`);
    }

}
