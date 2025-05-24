// src/app/lib/myPrisma.js

import { PrismaClient } from "../generated/prisma/client";

let myPrisma;

if (process.env.NODE_ENV === "production") {
  myPrisma = new PrismaClient();
} else {
  if (!global.myPrisma) {
    global.myPrisma = new PrismaClient();
  }
  myPrisma = global.myPrisma;
}

export default myPrisma;
