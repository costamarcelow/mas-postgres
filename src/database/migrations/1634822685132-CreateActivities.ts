import {MigrationInterface, QueryRunner, Table, Timestamp} from "typeorm";

export class CreateActivities1634822685132 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"users",
                columns:[
                    {
                        name: "id",
                        type: "varchar",
                        isPrimary: true,
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name:"activy_date",
                        type: "Timestamp",
                    },
                    {
                        name:"couse_unit_id",
                        type:"Timestamp",
                        default:"now()",
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
