import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg"; // Pour PostgreSQL
import { Pool } from "pg";

declare global {
  var prisma: PrismaClient | undefined;
}

// Créer le pool de connexions à la base de données
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Créer l'adaptateur
const adapter = new PrismaPg(pool);

// Initialiser PrismaClient avec l'adaptateur
const prisma =
  process.env.NODE_ENV === "production"
    ? new PrismaClient({ adapter }) // ✅ avec adaptateur
    : (global.prisma ?? new PrismaClient({ adapter }));

if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}

export default prisma;
