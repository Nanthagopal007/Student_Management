const { PrismaClient } = require("@prisma/client");
const { validationResult } = require("express-validator");

const prisma = new PrismaClient();

// Create Student
exports.createStudent = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { registrationNo, name, class: studentClass, rollNo, contactNumber, status } = req.body;

  try {
    const existingStudent = await prisma.student.findUnique({ where: { registrationNo } });
    if (existingStudent) {
      return res.status(400).json({ error: "Registration number already exists" });
    }

    const newStudent = await prisma.student.create({
      data: { registrationNo, name, class: studentClass, rollNo, contactNumber, status },
    });

    res.status(201).json(newStudent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create student" });
  }
};

// Get All Students
exports.getAllStudents = async (req, res) => {
  try {
    const students = await prisma.student.findMany();
    res.json(students);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve students" });
  }
};

// Get Single Student 
exports.getStudent = async (req, res) => {
  try {
    console.log("Fetching student with registrationNo:", req.params.registrationNo);
    
    const student = await prisma.student.findUnique({
      where: { registrationNo: req.params.registrationNo },
    });

    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }

    res.json(student);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve student" });
  }
};

// Update Student 
exports.updateStudent = async (req, res) => {
  try {
    console.log("Updating student with registrationNo:", req.params.registrationNo);

    const student = await prisma.student.findUnique({
      where: { registrationNo: req.params.registrationNo },
    });

    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }

    const updatedStudent = await prisma.student.update({
      where: { registrationNo: req.params.registrationNo },
      data: req.body,
    });

    res.json(updatedStudent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update student" });
  }
};

//Delete Student
exports.deleteStudent = async (req, res) => {
  try {
    console.log("Deleting student with registrationNo:", req.params.registrationNo);

    const student = await prisma.student.findUnique({
      where: { registrationNo: req.params.registrationNo },
    });

    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }

    await prisma.student.delete({
      where: { registrationNo: req.params.registrationNo },
    });

    res.json({ message: "Student deleted successfully" });
  } catch (error) {
    console.error("Delete error:", error);
    res.status(500).json({ error: "Failed to delete student" });
  }
};
