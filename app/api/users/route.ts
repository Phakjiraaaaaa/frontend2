import { NextResponse } from "next/server";

const BACKEND_URL = "https://backend024-seven.vercel.app/api/users";

// ================== GET ==================
export async function GET(request: Request) {
  try {
    const authHeader = request.headers.get("authorization");
    
    const res = await fetch(BACKEND_URL, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": authHeader || "",
      },
      cache: "no-store",
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Backend fetch failed" },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("GET users error:", error);
    return NextResponse.json(
      { error: "เกิดข้อผิดพลาดในการดึงข้อมูลผู้ใช้" },
      { status: 500 }
    );
  }
}

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
        { error: "ไม่สามารถสมัครสมาชิกได้", message: data.message },
        { status: res.status }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("POST users error:", error);
    return NextResponse.json(
      { error: "เกิดข้อผิดพลาดในการสมัครสมาชิก" },
      { status: 500 }
    );
  }
}
