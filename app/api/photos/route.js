import getAllPhotos from "@/lib/getAllPhotos";
import { NextResponse } from "next/server";

export async function GET() {
  const photos = getAllPhotos();

  return NextResponse.json(photos);
}
