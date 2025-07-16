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
    // ถ้าต้องการเช็กข้อมูลก่อน
    if (!username.trim() || !password.trim()) {
      alert("กรุณากรอกชื่อผู้ใช้และรหัสผ่าน");
      return;
    }
    // ตัวอย่าง alert
    alert(
      `เข้าสู่ระบบสำเร็จ!\nUsername: ${username}\nจำฉันไว้: ${
        remember ? "ใช่" : "ไม่ใช่"
      }`
    );

    // เปลี่ยนหน้าไป /login หรือหน้าอื่น
    router.push("/login"); // หรือเปลี่ยนเป็นหน้าอื่นที่ต้องการ
  };

  return (
    <main
      style={{
        maxWidth: 400,
        margin: "2rem auto",
        padding: "2rem",
        border: "1px solid #ddd",
        borderRadius: 8,
        backgroundColor: "#fff",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
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

        <label
          style={{ display: "flex", alignItems: "center", marginBottom: 12 }}
        >
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
  );
}
