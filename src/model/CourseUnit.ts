import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn
} from 'typeorm'
import { v4 as uuid } from 'uuid'
import { Activy } from './Activy'

class CourseUnit {
  @PrimaryColumn()
  readonly id: string

  @Column()
  name: string

  @Column()
  description: string

  @Column()
  created_at: string

  @OneToMany(() => Activy, activy => activy.course_unit)
  activies: Activy[]
}

export { CourseUnit }
