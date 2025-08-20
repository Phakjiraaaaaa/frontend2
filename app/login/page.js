"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);
  const [fadeIn, setFadeIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username.trim() || !password.trim()) {
      Swal.fire({
        icon: "warning",
        title: "กรุณากรอกชื่อผู้ใช้และรหัสผ่าน",
      });
      return;
    }

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (data.token) {
        localStorage.setItem("token", data.token);
        Swal.fire({
          icon: "success",
          title: "เข้าสู่ระบบสำเร็จ",
          showConfirmButton: false,
          timer: 1200,
        }).then(() => {
          router.push("/admin/users");
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง",
        });
      }
    } catch (error) {
      console.error("Login error:", error);
      Swal.fire({
        icon: "error",
        title: "เกิดข้อผิดพลาดในการเข้าสู่ระบบ",
      });
    }
  };

  const inputBaseStyle = {
    width: "100%",
    padding: 8,
    marginBottom: 12,
    borderWidth: "1.5px",
    borderStyle: "solid",
    borderColor: "#ccc",
    borderRadius: 4,
    fontSize: 16,
    transition: "border-color 0.3s, box-shadow 0.3s",
  };

  const inputFocusStyle = {
    borderColor: "#0d6efd",
    boxShadow: "0 0 5px 2px rgba(13, 110, 253, 0.4)",
    outline: "none",
  };

  const buttonStyle = {
    width: "100%",
    padding: 10,
    fontSize: 16,
    backgroundColor: "#0d6efd",
    color: "white",
    border: "none",
    borderRadius: 4,
    cursor: "pointer",
    transition: "background-color 0.3s, transform 0.1s",
  };

  const buttonHoverStyle = { backgroundColor: "#084bcc" };

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        width: "100%",
        backgroundImage: 'url("/images/silders/bg.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        opacity: fadeIn ? 1 : 0,
        transition: "opacity 1s ease-in",
      }}
    >
      <main
        style={{
          width: "100%",
          maxWidth: 400,
          padding: "2rem",
          borderRadius: 12,
          backgroundColor: "rgba(175, 175, 175, 0.95)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
          animation: fadeIn ? "fadeIn 1s ease forwards" : "none",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#0d6efd",
            marginBottom: "1.5rem",
            userSelect: "none",
          }}
        >
          เข้าสู่ระบบ
        </h1>

        <form onSubmit={handleSubmit} noValidate>
          <label htmlFor="username">ชื่อผู้ใช้</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              ...inputBaseStyle,
              ...(focusedInput === "username" ? inputFocusStyle : {}),
            }}
            onFocus={() => setFocusedInput("username")}
            onBlur={() => setFocusedInput(null)}
            required
          />

          <label htmlFor="password" style={{ display: "block", marginBottom: 4 }}>
            รหัสผ่าน
          </label>
          <div style={{ position: "relative", marginBottom: 12 }}>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                ...inputBaseStyle,
                paddingRight: 40,
                ...(focusedInput === "password" ? inputFocusStyle : {}),
              }}
              onFocus={() => setFocusedInput("password")}
              onBlur={() => setFocusedInput(null)}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "ซ่อนรหัสผ่าน" : "แสดงรหัสผ่าน"}
              style={{
                position: "absolute",
                right: 10,
                top: "50%",
                transform: "translateY(-50%)",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#0d6efd",
                fontSize: 18,
                userSelect: "none",
              }}
              tabIndex={-1}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>

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
            style={buttonStyle}
            onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.95)")}
            onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)
            }
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
