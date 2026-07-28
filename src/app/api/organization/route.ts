import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const members = await prisma.organizationMember.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(members);
  } catch (error) {
    return NextResponse.json(
      { error: "Gagal memuat data pengurus" },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, position, division, class: studentClass } = body;

    const newMember = await prisma.organizationMember.create({
      data: {
        name,
        position,
        division,
        class: studentClass,
      },
    });

    return NextResponse.json({ success: true, data: newMember });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Gagal menyimpan pengurus" },
      { status: 500 },
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    if (!id)
      return NextResponse.json({ error: "ID tidak valid" }, { status: 400 });

    await prisma.organizationMember.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Gagal menghapus pengurus" },
      { status: 500 },
    );
  }
}
