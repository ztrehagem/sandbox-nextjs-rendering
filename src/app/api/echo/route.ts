import { echo } from "@/server/echo";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest): Promise<Response> => {
  const message = request.nextUrl.searchParams.get("message");

  if (message == null) {
    return NextResponse.error();
  }

  return NextResponse.json(await echo(message));
};
