import { MigrationInterface, QueryRunner, Table, Timestamp } from 'typeorm'

export class CreateActivities1634822685132 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'activies',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true
          },
          {
            name: 'name',
            type: 'varchar'
          },
          {
            name: 'activy_date',
            type: 'Timestamp'
          },
          {
            name: 'grade',
            type: 'decimal'
          },
          {
            name: 'couseUnitId',
            type: 'varchar'
          },
          {
            name: 'create_at',
            type: 'timestamp',
            default: 'now()'
          }
        ],
        foreignKeys: [
          {
            name: 'ActivyCourseUnit',
            referencedTableName: 'course_units',
            referencedColumnNames: ['id'],
            columnNames: ['course_unit_id']
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('activies')
  }
}
