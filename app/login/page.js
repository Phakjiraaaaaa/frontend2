"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username.trim() || !password.trim()) {
      alert("กรุณากรอกชื่อผู้ใช้และรหัสผ่าน");
      return;
    }

    alert(`เข้าสู่ระบบสำเร็จ!\nUsername: ${username}\nจำฉันไว้: ${remember ? "ใช่" : "ไม่ใช่"}`);
    router.push("/home"); // เปลี่ยนหน้าเมื่อเข้าสู่ระบบ
  };

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        width: "100%",
        backgroundImage: 'url("/images/silders/bg.jpg")', 
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* กล่องฟอร์ม */}
      <main
        style={{
          width: "100%",
          maxWidth: 400,
          padding: "2rem",
          borderRadius: 8,
          backgroundColor: "rgba(175, 175, 175, 0.95)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
        }}
      >
        <h1 style={{ textAlign: "center", color: "#0d6efd", marginBottom: "1.5rem" }}>
          เข้าสู่ระบบ
        </h1>

        <form onSubmit={handleSubmit} noValidate>
          <label htmlFor="username">ชื่อผู้ใช้</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: "100%", padding: 8, marginBottom: 12 }}
            required
          />

          <label htmlFor="password">รหัสผ่าน</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%", padding: 8, marginBottom: 12 }}
            required
          />

          <label style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              style={{ marginRight: 8 }}
            />
            จำฉันไว้
          </label>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: 10,
              fontSize: 16,
              backgroundColor: "#0d6efd",
              color: "white",
              border: "none",
              borderRadius: 4,
              cursor: "pointer",
            }}
          >
            เข้าสู่ระบบ
          </button>

          <div style={{ marginTop: 16, textAlign: "center" }}>
            <Link
              href="/register"
              style={{
                marginRight: 16,
                color: "#fff",
                backgroundColor: "#198754",
                padding: "8px 16px",
                borderRadius: 4,
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              สมัครสมาชิก
            </Link>

            <Link
              href="/forgot-password"
              style={{
                color: "#0d6efd",
                textDecoration: "underline",
                display: "inline-block",
                marginTop: 8,
              }}
            >
              ลืมรหัสผ่าน
            </Link>
          </div>
        </form>
      </main>
    </div>
  );
}
