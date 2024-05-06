import {
  schoolCourses,
  collegeCourses,
  uniCourses,
} from "../data/educationData";
import CourseCard from "../components/CourseCard";
import './pages.css';

const Education = () => {
  return (
    <div className="education">
      <h1>Education</h1>
      <div className="course-group">
        <h3><strong>School Courses</strong></h3>
        <div className="school-courses">
          {schoolCourses.map((course, index) => (
            <CourseCard
              key={index}
              title={course.courseTitle}
              description={course.description}
              grade={course.grade}
            />
          ))}
        </div>
      </div>
      <div className="course-group">
        <h3><strong>College Courses</strong></h3>
        <div className="college-courses">
          {collegeCourses.map((course, index) => (
            <CourseCard
              key={index}
              title={course.courseTitle}
              description={course.description}
              grade={course.grade}
            />
          ))}
        </div>
      </div>
      <div className="course-group">
        <h3><strong>University Courses</strong></h3>
        <div className="uni-courses">
          {uniCourses.map((course, index) => (
            <CourseCard
              key={index}
              title={course.courseTitle}
              description={course.description}
              grade={course.grade}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
