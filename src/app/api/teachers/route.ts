import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const teachers = await prisma.teacher.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(teachers);
  } catch (error) {
    return NextResponse.json({ error: "Gagal memuat guru" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const newTeacher = await prisma.teacher.create({ data: body });
    return NextResponse.json(newTeacher);
  } catch (error) {
    return NextResponse.json({ error: "Gagal menambah guru" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "ID tidak valid" }, { status: 400 });
    }

    await prisma.teacher.delete({
      where: { id: id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Gagal menghapus guru" },
      { status: 500 },
    );
  }
}
