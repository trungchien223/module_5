
import './App.css'
import { students } from './data/students'

function App() {
  return (
    <div className="container">
      <h1>Danh sách sinh viên</h1>
      <table className="student-table">
        <thead>
          <tr>
            <th>Công ty</th>
            <th>Liên hệ</th>
            <th>Quốc gia</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.company}</td>
              <td>{student.contact}</td>
              <td>{student.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
