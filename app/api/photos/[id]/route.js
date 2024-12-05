import getPhotoById from "@/lib/getPhotoById";
import { NextResponse } from "next/server";

export async function GET(_req, { params }) {
  const { id } = await params;
  const photoById = getPhotoById(id);

  return NextResponse.json(photoById);
}
