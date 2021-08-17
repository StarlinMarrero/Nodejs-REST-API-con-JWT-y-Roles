import {MigrationInterface, QueryRunner} from "typeorm";

export class NUllable1629182693103 implements MigrationInterface {
    name = 'NUllable1629182693103'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."Products" ALTER COLUMN "category" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."Products" ALTER COLUMN "category" SET NOT NULL`);
    }

}
