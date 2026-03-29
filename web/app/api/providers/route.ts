import { NextResponse } from "next/server";
import { getProviders } from "@/lib/models";

export async function GET() {
  const providers = getProviders();
  return NextResponse.json({
    providers,
    total: providers.length,
  });
}
