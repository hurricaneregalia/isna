import prisma from "@/app/database/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req) {
  const body = await req.json();
  const { email, password, firstName, lastName, name, userName, image } = body;

  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    return NextResponse.json({ message: "Email already in use" }, { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      firstName,
      lastName,
      name,
      userName,
      image,
    },
  });

  return NextResponse.json({ message: "User created", userId: user.id }, { status: 201 });
}
