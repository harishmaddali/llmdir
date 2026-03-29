import { NextResponse } from "next/server";
import { LLM_MODELS } from "@/lib/models";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const model = LLM_MODELS.find(
    (m) => m.id === id || m.id === decodeURIComponent(id)
  );

  if (!model) {
    return NextResponse.json(
      { error: "Model not found", id },
      { status: 404 }
    );
  }

  return NextResponse.json(model);
}
