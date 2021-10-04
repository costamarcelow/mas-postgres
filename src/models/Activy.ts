import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn} from 'typeorm'
import {v4 as uuid} from 'uuid'
import { CouseUnit } from './CouseUnit'

class Activy {

    constructor(){
        if(this.id){
            this.id = uuid()
        }

    }
    readonly id: string

    /*complementar atividade pratica */

    @ManyToOne(()=> CouseUnit, couse_unit => couse_unit.activies)
    course_unit: CouseUnit
}

export { Activy };
