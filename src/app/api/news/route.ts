import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const news = await prisma.news.findMany({ orderBy: { createdAt: "desc" } });
    return NextResponse.json(news);
  } catch (error) {
    return NextResponse.json({ error: "Gagal memuat berita" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const newNews = await prisma.news.create({ data: body });
    return NextResponse.json(newNews);
  } catch (error) {
    return NextResponse.json(
      { error: "Gagal menambah berita" },
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

    // Pastikan menggunakan .delete() dengan where id yang spesifik
    await prisma.news.delete({
      where: { id: id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Gagal menghapus berita" },
      { status: 500 },
    );
  }
}
