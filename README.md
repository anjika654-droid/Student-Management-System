# Student-Management-System
A full-stack web application designed to efficiently manage student records, academic details, and administrative tasks in an organized and user-friendly way. This system streamlines the process of storing, updating, and retrieving student information for educational institutions.

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Routes
const studentRoutes = require("./routes/studentRoutes");
app.use("/api/students", studentRoutes);

// MongoDB connect
mongoose.connect("mongodb://127.0.0.1:27017/studentDB")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
