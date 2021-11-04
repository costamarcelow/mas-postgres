import { Request, Response } from 'express'
import { CreateCourseUnitService } from '../services/CreateCourseUnitService'
import { GetCoursesUnitsService } from '../services/GetCoursesUnitsService'
class CourseUnitController {
  async create(request: Request, response: Response) {
    const courseData = request.body
    const createCourse = new CreateCourseUnitService()
    const course = await createCourse.execute(courseData)
    return response.json(course)
  }

  async show(request: Request, response: Response) {

    const userId = request.body.user;

    const getCoursesUnits = new GetCoursesUnitsService();

    const coursesUnits = await getCoursesUnits.execute(userId);
    return response.json(coursesUnits);

  }
}
export { CourseUnitController }
