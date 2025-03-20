Student Management System (School Management Module)
Overview
This is a RESTful API built using Node.js, Express.js, and Prisma ORM to manage student records in a School Management System. It allows users to create, retrieve, update, and delete student details while ensuring proper validation and error handling.

Features
✅ Add a new student record
✅ Retrieve all students (with optional pagination)
✅ Fetch a student by Registration Number
✅ Update student details
✅ Delete a student (hard delete)
✅ Error handling and input validation

Technologies Used
Node.js - Backend runtime
Express.js - Web framework
Prisma ORM - Database ORM
PostgreSQL / MySQL / MongoDB - Database
dotenv - Environment variables management
express-validator - Request validation
Installation and Setup
1️⃣ Clone the Repository
sh
Copy
Edit
git clone https://github.com/Nanthagopal007/student-management.git
cd student-management
2️⃣ Install Dependencies
sh
Copy
Edit
npm install
3️⃣ Configure Environment Variables
Create a .env file in the root directory and configure your database connection:

ini
Copy
Edit
DATABASE_URL=your_database_url
PORT=5001
4️⃣ Run Prisma Migrations
sh
Copy
Edit
npx prisma migrate dev --name init
5️⃣ Start the Server
sh
Copy
Edit
npm run dev
Your server will run on http://localhost:5001 🚀

API Endpoints
1️⃣ Create Student
Method: POST /students
Body:
json
Copy
Edit
{
  "registrationNo": "REG12345",
  "name": "John Doe",
  "class": "10th",
  "rollNo": 5,
  "contactNumber": "9876543210",
  "status": true
}
Response: 201 Created
2️⃣ Get All Students
Method: GET /students
Response: 200 OK
3️⃣ Get Student by Registration Number
Method: GET /students/:regNo
Response: 200 OK or 404 Not Found
4️⃣ Update Student
Method: PUT /students/:regNo
Body: (Only fields to update)
Response: 200 OK or 404 Not Found
5️⃣ Delete Student (Hard Delete)
Method: DELETE /students/:regNo
Response: 200 OK or 404 Not Found
Folder Structure
bash
Copy
Edit
student-management/
│── prisma/                  # Prisma schema and migrations
│── routes/                  # API route definitions
│── controllers/             # Business logic (CRUD functions)
│── config/                  # Database configuration
│── .env                     # Environment variables (Not pushed to GitHub)
│── .gitignore               # Ignore sensitive files
│── server.js                # Entry point of the application
│── package.json             # Dependencies & scripts
│── README.md                # Documentation
Contributors
👤 Nanthagopal – GitHub Profile

