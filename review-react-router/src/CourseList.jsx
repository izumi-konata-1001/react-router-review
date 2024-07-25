import React from 'react';
import './css/CourseList.css';

const courses = [
  { code: 'CHM 2045', name: 'General Chemistry 1', overall: 3, easiness: 2.2, interest: 2.8, usefulness: 3, reviews: 32 },
  { code: 'MAC 2313', name: 'Analytic Geometry and Calculus 3', overall: 3.8, easiness: 2.7, interest: 3.4, usefulness: 3.9, reviews: 23 },
  { code: 'MAC 2311', name: 'Analytic Geometry and Calculus 1', overall: 3.6, easiness: 2.9, interest: 3.1, usefulness: 4.2, reviews: 20 },
  { code: 'MAC 2312', name: 'Analytic Geometry and Calculus 2', overall: 3.8, easiness: 2.7, interest: 2.9, usefulness: 3.5, reviews: 16 },
];

function CourseList() {
  return (
    <div className="CourseListContainer">
      <p>Courses</p>
      <div className="CourseListArea">
        <table>
          <thead>
            <tr>
              <th>Code</th>
              <th>Name</th>
              <th>Overall</th>
              <th>Easiness</th>
              <th>Interest</th>
              <th>Usefulness</th>
              <th>Reviews</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr key={index}>
                <td>{course.code}</td>
                <td>{course.name}</td>
                <td><span className={course.overall > 4 ? 'high' : ''}>{course.overall}</span></td>
                <td><span className={course.easiness > 4 ? 'high' : ''}>{course.easiness}</span></td>
                <td><span className={course.interest > 4 ? 'high' : ''}>{course.interest}</span></td>
                <td><span className={course.usefulness > 4 ? 'high' : ''}>{course.usefulness}</span></td>
                <td>{course.reviews}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CourseList;