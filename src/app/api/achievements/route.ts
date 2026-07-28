import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const achievements = await prisma.achievement.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(achievements);
  } catch (error) {
    return NextResponse.json(
      { error: "Gagal memuat prestasi" },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const newAchievement = await prisma.achievement.create({ data: body });
    return NextResponse.json(newAchievement);
  } catch (error) {
    return NextResponse.json(
      { error: "Gagal menambah prestasi" },
      { status: 500 },
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "ID tidak valid" }, { status: 400 });
    }

    await prisma.achievement.delete({
      where: { id: id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Gagal menghapus prestasi" },
      { status: 500 },
    );
  }
}
