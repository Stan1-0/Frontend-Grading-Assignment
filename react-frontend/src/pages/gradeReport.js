import React, { useState, useEffect } from "react";
import "../styles/gradereport.css";

const GradeReport = () => {
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [allCourses, setAllCourses] = useState([]);

  // Load sample data
  useEffect(() => {
    const courses = [
      {
        course: "DCIT101",
        title: "INTRODUCTION TO COMPUTER SCIENCE",
        grade: "A",
        semester: "FIRST SEMESTER",
        academicYear: "2022/2023",
      },
      {
        course: "DCIT103",
        title: "OFFICE PRODUCTIVITY TOOLS",
        grade: "A",
        semester: "FIRST SEMESTER",
        academicYear: "2022/2023",
      },
      {
        course: "DCIT105",
        title: "MATHEMATICS FOR IT PROFESSIONALS",
        grade: "B+",
        semester: "FIRST SEMESTER",
        academicYear: "2022/2023",
      },
      {
        course: "ECON101",
        title: "INTRODUCTION TO ECONOMICS I ",
        grade: "A",
        semester: "FIRST SEMESTER",
        academicYear: "2022/2023",
      },
      {
        course: "STAT111",
        title: " INTRODUCTION TO STATISTICS AND PROBABILITY",
        grade: "A",
        semester: "FIRST SEMESTER",
        academicYear: "2022/2023",
      },
      {
        course: "UGRC150",
        title: " CRITICAL THINKING AND PRACTICAL REASONING ",
        grade: "A",
        semester: "FIRST SEMESTER",
        academicYear: "2022/2023",
      },

      {
        course: "DCIT102",
        title: "COMPUTER HARDWARE FUNDAMENTALS AND CIRCUITS",
        grade: "A",
        semester: "SECOND SEMESTER",
        academicYear: "2022/2023",
      },
      {
        course: "DCIT104",
        title: "PROGRAMMING FUNDAMENTALS",
        grade: "B",
        semester: "SECOND SEMESTER",
        academicYear: "2022/2023",
      },
      {
        course: "ECON102",
        title: "INTRODUCTION TO ECONOMICS II ",
        grade: "A",
        semester: "SECOND SEMESTER",
        academicYear: "2022/2023",
      },
      {
        course: "STAT112",
        title: " STAT112 INTRODUCTION TO STATISTICS AND PROBABILITY II ",
        grade: "A",
        semester: "SECOND SEMESTER",
        academicYear: "2022/2023",
      },
      {
        course: "MATH122",
        title: "CALCULUS I",
        grade: "A",
        semester: "SECOND SEMESTER",
        academicYear: "2022/2023",
      },
      {
        course: "UGRC110",
        title: "ACADEMIC WRITING I",
        grade: "A",
        semester: "SECOND SEMESTER",
        academicYear: "2022/2023",
      },

      {
        course: "CBAS210",
        title: "ACADEMIC WRITING II",
        grade: "A",
        semester: "FIRST SEMESTER",
        academicYear: "2023/2024",
      },
      {
        course: "DCIT201",
        title: "PROGRAMMING I",
        grade: "B",
        semester: "FIRST SEMESTER",
        academicYear: "2023/2024",
      },
      {
        course: "DCIT203",
        title: "DIGITAL AND LOGIC SYSTEMS DESIGN",
        grade: "C",
        semester: "FIRST SEMESTER",
        academicYear: "2023/2024",
      },
      {
        course: "DCIT205",
        title: "MULTIMEDIA AND WEB DESIGN",
        grade: "A",
        semester: "FIRST SEMESTER",
        academicYear: "2023/2024",
      },
      {
        course: "DCIT207",
        title: "COMPUTER ORGANIZATION & ARCHITECTURE",
        grade: "B",
        semester: "FIRST SEMESTER",
        academicYear: "2023/2024",
      },
      {
        course: "DCIT209",
        title: "E-BUSINESS ARCHITECTURES",
        grade: "A",
        semester: "FIRST SEMESTER",
        academicYear: "2023/2024",
      },
    ];

    setAllCourses(courses);
    setFilteredCourses(allCourses);
  }, []);
  const handleFilterChange = (event) => {
    const { value } = event.target;
    if (value === "All") {
      setFilteredCourses(allCourses);
    } else {
      const filtered = allCourses.filter((course) => {
        return course.semester === value || course.academicYear === value;
      });
      setFilteredCourses(filtered);
    }
  };

  return (
    <div className="body2">
      <div className="col-md-12">
        <div className="grid search">
          <label htmlFor="gradeFilter">
            Filter by Semester or Academic Year:
          </label>
          <select id="gradeFilter" onChange={handleFilterChange}>
            <option value="All">All</option>
            <option value="FIRST SEMESTER">First semester</option>
            <option value="SECOND SEMESTER">Second Semester</option>
            <option value="2022/2023">2022/2023</option>
            <option value="2023/2024">2023/2024</option>
          </select>
        </div>

        <h2>
          <i className="fa fa-file-o"></i> Grade Report
        </h2>
        <hr />

        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Course Code</th>
                <th>Course Title</th>
                <th>Grade</th>
                <th>Semester</th>
                <th>Academic Year</th>
              </tr>
            </thead>
            <tbody>
              {filteredCourses.map((course) => (
                <tr key={course.course}>
                  <td>{course.course}</td>
                  <td>{course.title}</td>
                  <td>{course.grade}</td>
                  <td>{course.semester}</td>
                  <td>{course.academicYear}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default GradeReport;
