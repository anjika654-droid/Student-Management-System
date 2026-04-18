import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({
    name: "",
    age: "",
    course: "",
    email: ""
  });

  const API = "http://localhost:5000/api/students";

  // Fetch students
  const getStudents = async () => {
    const res = await axios.get(API);
    setStudents(res.data);
  };

  useEffect(() => {
    getStudents();
  }, []);

  // Add student
  const addStudent = async () => {
    await axios.post(API, form);
    setForm({ name: "", age: "", course: "", email: "" });
    getStudents();
  };

  // Delete
  const deleteStudent = async (id) => {
    await axios.delete(`${API}/${id}`);
    getStudents();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>🎓 Student Management System</h2>

      <input placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })} />

      <input placeholder="Age"
        value={form.age}
        onChange={(e) => setForm({ ...form, age: e.target.value })} />

      <input placeholder="Course"
        value={form.course}
        onChange={(e) => setForm({ ...form, course: e.target.value })} />

      <input placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })} />

      <button onClick={addStudent}>Add</button>

      <ul>
        {students.map((s) => (
          <li key={s._id}>
            {s.name} | {s.age} | {s.course} | {s.email}
            <button onClick={() => deleteStudent(s._id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
