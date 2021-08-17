import {MigrationInterface, QueryRunner} from "typeorm";

export class imgUrl1629181358166 implements MigrationInterface {
    name = 'imgUrl1629181358166'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."Products" ADD "imgUrl" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."Products" DROP COLUMN "imgUrl"`);
    }

}
