import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToOne,
  PrimaryColumn
} from 'typeorm'
import { v4 as uuid } from 'uuid'
import { CourseUnit } from './CourseUnit'

@Entity('activies')
class Activy {
  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }

  @PrimaryColumn()
  readonly id: string

  @ManyToOne(() => CourseUnit, course_unit => course_unit.activies)
  @JoinTable()
  course_unit: CourseUnit

  @Column()
  name: string

  @Column()
  activy_date: Date

  @Column()
  course_unit_id: string

  @Column()
  grade: number

  @Column()
  created_at: Date
}

export { Activy }
