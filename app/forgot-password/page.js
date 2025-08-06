"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !email.includes("@") || !email.includes(".")) {
      setError("กรุณากรอกอีเมลให้ถูกต้อง");
      return;
    }

    setError("");
    setLoading(true);

    setTimeout(() => {
      setSuccess(true);
      setEmail("");
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "12px",
    borderRadius: "4px",
    border: "1.5px solid #ccc",
    fontSize: "16px",
    outline: "none",
    transition: "border-color 0.3s, box-shadow 0.3s",
    ...(focused
      ? {
          borderColor: "#0d6efd",
          boxShadow: "0 0 5px 2px rgba(13, 110, 253, 0.4)",
        }
      : {}),
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#0d6efd",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s, transform 0.1s",
  };

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
          ลืมรหัสผ่าน
        </h1>

        {success && (
          <div
            style={{
              backgroundColor: "#d1e7dd",
              color: "#0f5132",
              padding: "10px",
              borderRadius: "5px",
              marginBottom: "1rem",
              textAlign: "center",
            }}
          >
            ส่งลิงก์รีเซ็ตรหัสผ่านเรียบร้อย! โปรดตรวจสอบอีเมลของคุณ
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          <label htmlFor="email">อีเมล</label>
          <input
            type="email"
            id="email"
            placeholder="กรอกอีเมลของคุณ"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            disabled={loading}
            required
            style={inputStyle}
          />
          {error && (
            <div style={{ color: "red", fontSize: "14px", marginBottom: "12px" }}>
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading || success}
            style={{
              ...buttonStyle,
              backgroundColor: loading || success ? "#6c757d" : "#0d6efd",
            }}
            onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.95)")}
            onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            {loading ? (
              <>
                <span
                  className="spinner-border spinner-border-sm me-2"
                  role="status"
                  aria-hidden="true"
                ></span>
                กำลังส่ง...
              </>
            ) : (
              <>
                <i className="bi bi-envelope me-2"></i>
                ยืนยัน
              </>
            )}
          </button>

          <div style={{ marginTop: "16px", textAlign: "center" }}>
            <Link
              href="/login"
              style={{
                color: "#0d6efd",
                textDecoration: "underline",
                fontWeight: "bold",
              }}
            >
              กลับไปหน้าเข้าสู่ระบบ
            </Link>
          </div>
        </form>
      </main>
    </div>
  );
}
