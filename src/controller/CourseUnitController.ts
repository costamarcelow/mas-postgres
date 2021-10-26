import { Request, Response } from 'express'
import { CreateCourseUnitService } from '../services/CreateCourseUnitService'
class CourseUnitController {
  async create(request: Request, response: Response) {
    const courseData = request.body
    const createCourse = new CreateCourseUnitService()
    const course = await createCourse.execute(courseData)
    return response.json(course)
  }
}
export { CourseUnitController }
