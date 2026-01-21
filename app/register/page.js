"use client";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Register() {
  const [firstname, setFirstname] = useState(""); // คำนำหน้า
  const [fullname, setFullname] = useState("");
  const [lastname, setLastname] = useState("");

  // เพิ่ม State สำหรับข้อมูลใหม่
  const [address, setAddress] = useState("");
  const [sex, setSex] = useState("");
  const [birthday, setBirthday] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);
  const [fadeIn, setFadeIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setFadeIn(true);
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/admin/users");
      return;
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !firstname ||
      !fullname.trim() ||
      !lastname.trim() ||
      !username.trim() ||
      !password.trim() ||
      // เพิ่ม Validation
      !address.trim() ||
      !sex ||
      !birthday
    ) {
      Swal.fire({
        icon: "error",
        title: "<h3>กรุณากรอกข้อมูลให้ครบถ้วน</h3>",
        showConfirmButton: false,
        timer: 2000,
      });
      return;
    }

    let res;
    try {
      console.log("Attempting to fetch from: /api/users");
      // อัปเดต log
      console.log("Request body:", {
        firstname,
        fullname,
        lastname,
        address, // เพิ่ม
        sex, // เพิ่ม
        birthday, // เพิ่ม
        username,
        password,
      });

      res = await fetch(
        "https://backend024-seven.vercel.app/api/auth/register",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstname,
            fullname,
            lastname,
            address, // ส่งข้อมูลเพิ่ม
            sex, // ส่งข้อมูลเพิ่ม
            birthday, // ส่งข้อมูลเพิ่ม
            username,
            password,
          }),
        },
      );

      console.log("Response status:", res.status);
      console.log("Response ok:", res.ok);
    } catch (err) {
      console.error("Network error details:", err);
      console.error("Error name:", err.name);
      console.error("Error message:", err.message);
      Swal.fire({
        icon: "error",
        title: "<h3>ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้</h3>",
        html: `<p>รายละเอียดข้อผิดพลาด: ${err.message}</p>`,
        showConfirmButton: false,
        timer: 3000,
      });
      return;
    }

    if (res.ok) {
      Swal.fire({
        icon: "success",
        title: "<h3>บันทึกข้อมูลเรียบร้อยแล้ว</h3>",
        showConfirmButton: false,
        timer: 2000,
      }).then(() => {
        router.push("/login");
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "<h3>ไม่สามารถสมัครสมาชิกได้</h3>",
        showConfirmButton: false,
        timer: 2000,
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
    boxShadow: "0 0 5px 2px rgba(13,110,253,0.4)",
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
        height: "100vh", // หรือใช้ minHeight: "100vh" หากเนื้อหายาวเกินหน้าจอ
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
        overflowY: "auto", // เพิ่มเพื่อให้เลื่อนได้ถ้าจอมือถือเล็ก
        padding: "20px 0", // เพิ่ม padding บนล่างเผื่อเนื้อหาล้น
      }}
    >
      <main
        style={{
          width: "100%",
          maxWidth: 420,
          padding: "2rem",
          borderRadius: 12,
          backgroundColor: "rgba(175, 175, 175, 0.95)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
          marginTop: "auto", // จัดกึ่งกลางในกรณี scroll
          marginBottom: "auto",
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
          {/* คำนำหน้า */}
          <label>คำนำหน้า</label>
          <select
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            style={{
              ...inputBaseStyle,
              ...(focusedInput === "firstname" ? inputFocusStyle : {}),
            }}
            onFocus={() => setFocusedInput("firstname")}
            onBlur={() => setFocusedInput(null)}
            required
          >
            <option value="">เลือกคำนำหน้า</option>
            <option value="นาย">นาย</option>
            <option value="นาง">นาง</option>
            <option value="นางสาว">นางสาว</option>
          </select>

          {/* ชื่อ */}
          <label>ชื่อ</label>
          <input
            type="text"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            style={{
              ...inputBaseStyle,
              ...(focusedInput === "fullname" ? inputFocusStyle : {}),
            }}
            onFocus={() => setFocusedInput("fullname")}
            onBlur={() => setFocusedInput(null)}
            required
          />

          {/* นามสกุล */}
          <label>นามสกุล</label>
          <input
            type="text"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            style={{
              ...inputBaseStyle,
              ...(focusedInput === "lastname" ? inputFocusStyle : {}),
            }}
            onFocus={() => setFocusedInput("lastname")}
            onBlur={() => setFocusedInput(null)}
            required
          />

          {/* --- ส่วนที่เพิ่มเข้ามา --- */}

          {/* ที่อยู่ */}
          <label>ที่อยู่</label>
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            rows="3"
            style={{
              ...inputBaseStyle,
              resize: "vertical",
              ...(focusedInput === "address" ? inputFocusStyle : {}),
            }}
            onFocus={() => setFocusedInput("address")}
            onBlur={() => setFocusedInput(null)}
            required
          />

          {/* เพศ */}
          <label>เพศ</label>
          <select
            value={sex}
            onChange={(e) => setSex(e.target.value)}
            style={{
              ...inputBaseStyle,
              ...(focusedInput === "sex" ? inputFocusStyle : {}),
            }}
            onFocus={() => setFocusedInput("sex")}
            onBlur={() => setFocusedInput(null)}
            required
          >
            <option value="">เลือกเพศ</option>
            <option value="ชาย">ชาย</option>
            <option value="หญิง">หญิง</option>
            <option value="อื่นๆ">อื่นๆ</option>
          </select>

          {/* วันเกิด */}
          <label>วันเกิด</label>
          <input
            type="date"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            style={{
              ...inputBaseStyle,
              ...(focusedInput === "birthday" ? inputFocusStyle : {}),
            }}
            onFocus={() => setFocusedInput("birthday")}
            onBlur={() => setFocusedInput(null)}
            required
          />

          {/* --- จบส่วนที่เพิ่มเข้ามา --- */}

          {/* Username */}
          <label>ชื่อผู้ใช้</label>
          <input
            type="text"
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

          {/* Password */}
          <label>รหัสผ่าน</label>
          <div style={{ position: "relative", marginBottom: 12 }}>
            <input
              type={showPassword ? "text" : "password"}
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

          <button
            type="submit"
            style={buttonStyle}
            onMouseDown={(e) =>
              (e.currentTarget.style.transform = "scale(0.95)")
            }
            onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor =
                buttonHoverStyle.backgroundColor)
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor =
                buttonStyle.backgroundColor)
            }
          >
            สมัครสมาชิก
          </button>

          {/* ลิงก์กลับไป Login */}
          <div style={{ marginTop: 16, textAlign: "center" }}>
            <Link
              href="/login"
              style={{ color: "#0d6efd", textDecoration: "underline" }}
            >
              เข้าสู่ระบบ
            </Link>
          </div>
        </form>
      </main>
    </div>
  );
}
