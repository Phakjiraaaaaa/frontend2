import { NextResponse } from "next/server";

const BACKEND_URL = "https://backend024-seven.vercel.app/api/login";

// ================== POST ==================
export async function POST(request: Request) {
  try {
    const body = await request.json();

    const res = await fetch(BACKEND_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json(
        { error: "ไม่สามารถเข้าสู่ระบบได้", message: data.message },
        { status: res.status }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("POST login error:", error);
    return NextResponse.json(
      { error: "เกิดข้อผิดพลาดในการเข้าสู่ระบบ" },
      { status: 500 }
    );
  }
}
