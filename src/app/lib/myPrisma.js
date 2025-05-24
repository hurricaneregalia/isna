// src/app/lib/myPrisma.js

import { PrismaClient } from "../generated/prisma/client";

const globalForPrisma = globalThis;

const myPrisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = myPrisma;

export { myPrisma };
