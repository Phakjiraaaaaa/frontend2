import { NextResponse } from "next/server";

const BACKEND_URL = "https://backend024-seven.vercel.app/api/users";

// ================== DELETE ==================
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    
    console.log("DELETE request received for user ID:", id);

    const authHeader = request.headers.get("authorization");
    console.log("Auth header:", authHeader ? "Present" : "Missing");
    
    const res = await fetch(`${BACKEND_URL}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": authHeader || "",
      },
    });

    console.log("Backend response status:", res.status);

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Backend error response:", errorText);
      return NextResponse.json(
        { error: "Backend delete failed", details: errorText },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("DELETE user error:", error);
    return NextResponse.json(
      { error: "เกิดข้อผิดพลาดในการลบข้อมูลผู้ใช้" },
      { status: 500 }
    );
  }
}
