"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [prefix, setPrefix] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !username.trim() ||
      !password.trim() ||
      !prefix ||
      !firstName.trim() ||
      !lastName.trim() ||
      !acceptedTerms
    ) {
      alert("กรุณากรอกข้อมูลให้ครบถ้วนและยอมรับเงื่อนไข");
      return;
    }

    alert(
      `สมัครสมาชิกสำเร็จ!\n` +
        `ชื่อผู้ใช้: ${username}\n` +
        `คำนำหน้า: ${prefix}\n` +
        `ชื่อ: ${firstName}\n` +
        `นามสกุล: ${lastName}\n` +
        `ยอมรับเงื่อนไข: ใช่`
    );

    router.push("/login");
  };

  const baseInputStyle = {
    width: "100%",
    padding: 8,
    marginBottom: 12,
    borderRadius: 4,
    border: "1.5px solid #ccc",
    fontSize: 16,
    transition: "border-color 0.3s, box-shadow 0.3s",
  };

  const focusInputStyle = {
    borderColor: "#0d6efd",
    boxShadow: "0 0 8px rgba(13, 110, 253, 0.5)",
    outline: "none",
  };

  const buttonStyle = {
    width: "100%",
    padding: 12,
    fontSize: 18,
    backgroundColor: "#0d6efd",
    color: "white",
    border: "none",
    borderRadius: 6,
    cursor: "pointer",
    fontWeight: "600",
    transition: "background-color 0.3s, transform 0.1s",
    userSelect: "none",
  };

  const buttonHoverStyle = {
    backgroundColor: "#084bcc",
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
          width: "150%",
          maxWidth: 400,
          padding: "2rem",
          borderRadius: 12,
          backgroundColor: "rgba(175, 175, 175, 0.95)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
          userSelect: "none",
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
          สมัครสมาชิก
        </h1>

        <form onSubmit={handleSubmit} noValidate>
          <label htmlFor="username">ชื่อผู้ใช้</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="กรอกชื่อผู้ใช้"
            style={{
              ...baseInputStyle,
              ...(focusedInput === "username" ? focusInputStyle : {}),
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
              placeholder="กรอกรหัสผ่าน"
              style={{
                ...baseInputStyle,
                paddingRight: 40,
                ...(focusedInput === "password" ? focusInputStyle : {}),
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
                right: 8,
                top: "50%",
                transform: "translateY(-50%)",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#0d6efd",
                fontSize: 20,
                userSelect: "none",
              }}
              tabIndex={-1}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>

          <label htmlFor="prefix">คำนำหน้า</label>
          <select
            id="prefix"
            value={prefix}
            onChange={(e) => setPrefix(e.target.value)}
            style={{
              ...baseInputStyle,
              backgroundColor: "white",
              cursor: "pointer",
              ...(focusedInput === "prefix" ? focusInputStyle : {}),
            }}
            onFocus={() => setFocusedInput("prefix")}
            onBlur={() => setFocusedInput(null)}
            required
          >
            <option value="">-- กรุณาเลือก --</option>
            <option value="นาย">นาย</option>
            <option value="นาง">นาง</option>
            <option value="นางสาว">นางสาว</option>
          </select>

          <label htmlFor="firstName">ชื่อ</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="กรอกชื่อ"
            style={{
              ...baseInputStyle,
              ...(focusedInput === "firstName" ? focusInputStyle : {}),
            }}
            onFocus={() => setFocusedInput("firstName")}
            onBlur={() => setFocusedInput(null)}
            required
          />

          <label htmlFor="lastName">นามสกุล</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="กรอกนามสกุล"
            style={{
              ...baseInputStyle,
              ...(focusedInput === "lastName" ? focusInputStyle : {}),
            }}
            onFocus={() => setFocusedInput("lastName")}
            onBlur={() => setFocusedInput(null)}
            required
          />

          <label
            style={{ display: "flex", alignItems: "center", marginBottom: 16 }}
          >
            <input
              type="checkbox"
              checked={acceptedTerms}
              onChange={(e) => setAcceptedTerms(e.target.checked)}
              required
              style={{ marginRight: 8 }}
            />
            ยอมรับเงื่อนไข
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
            สมัครสมาชิก
          </button>

          <div style={{ marginTop: 16, textAlign: "center" }}>
            <Link
              href="/login"
              style={{
                color: "#0d6efd",
                textDecoration: "underline",
                cursor: "pointer",
                userSelect: "none",
              }}
            >
              กลับไปที่หน้าเข้าสู่ระบบ
            </Link>
          </div>
        </form>
      </main>
    </div>
  );
}
