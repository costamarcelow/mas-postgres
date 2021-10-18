import { getRepository } from "typeorm";
import { CourseUnit } from "../model/CourseUnit";

interface CourseUnitData {
    name: string;
    description: string;
}

class CreateCourseUnitService {

    async execute({name, description}: CourseUnitData){
        const courseRepository = getRepository(CourseUnit);

        const course_unit_id = courseRepository.create({
            name,
            description
        });

    await courseRepository.save(course_unit_id);

    return course_unit_id;
    }
}

export {CreateCourseUnitService};
