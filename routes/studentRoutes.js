const express = require("express");
const { body, param } = require("express-validator");
const studentController = require("../controllers/studentController");

const router = express.Router();

router.post(
  "/",
  [
    body("registrationNo").isString().notEmpty(),
    body("name").isString().notEmpty(),
    body("class").isString().notEmpty(),
    body("rollNo").isInt(),
    body("contactNumber").isString().notEmpty(),
    body("status").isBoolean().optional(), // Optional field
  ],
  studentController.createStudent
);

router.get("/", studentController.getAllStudents);

router.get(
  "/:registrationNo",
  param("registrationNo").isString(),
  studentController.getStudent
);

router.put(
  "/:registrationNo",
  [
    param("registrationNo").isString(),
    body("name").optional().isString(),
    body("class").optional().isString(),
    body("rollNo").optional().isInt(),
    body("contactNumber").optional().isString(),
    body("status").optional().isBoolean(),
  ],
  studentController.updateStudent
);

router.delete(
  "/:registrationNo",
  param("registrationNo").isString(),
  studentController.deleteStudent
);

module.exports = router;
