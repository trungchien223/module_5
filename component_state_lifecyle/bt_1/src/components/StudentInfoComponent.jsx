import React, { useState } from 'react';
import { studentData } from '../data/studentData';

const StudentInfoComponent = () => {
  const [students] = useState(studentData);

  return (
    <div className="student-info-container">
      <table className="student-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {/* Sử dụng map để binding dữ liệu lên table */}
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentInfoComponent;
