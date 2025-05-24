// src/app/lib/prisma.js

import { PrismaClient } from "./prisma";

const globalForPrisma = globalThis;

const myPrisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = myPrisma;

export { myPrisma };
