require("dotenv").config();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const connectDB = async () => {
  try {
    await prisma.$connect();
    console.log(" Database connected successfully");
  } catch (error) {
    console.error(" Database connection failed:", error);
    process.exit(1);
  }
};

// Gracefully disconnect Prisma when the process stops
process.on("SIGINT", async () => {
  await prisma.$disconnect();
  console.log(" Prisma disconnected");
  process.exit(0);
});

module.exports = { prisma, connectDB };
