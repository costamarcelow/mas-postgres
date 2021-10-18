import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn} from 'typeorm'
import {v4 as uuid} from 'uuid';
import {CourseUnit} from './CourseUnit';

class Activy{

    contructor(){
        if(!this.id){
            this.id = uuid()
        }
    }

    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    activy_date: string;

    @Column()
    course_unit_id: string;

    @Column()
    created_at: string;
    
  
    @ManyToOne(()=> CourseUnit, course_unit => course_unit.activies)
    course_unit: CourseUnit
}

export {Activy}