import { NextResponse } from "next/server";
import { LLM_MODELS } from "@/lib/models";

export async function GET() {
  return NextResponse.json({
    models: LLM_MODELS,
    total: LLM_MODELS.length,
  });
}
