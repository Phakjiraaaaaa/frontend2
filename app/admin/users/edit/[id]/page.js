"use client";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useParams, useRouter } from "next/navigation";

export default function EditUser() {
  const router = useRouter();
  const params = useParams();
  const id = params.id;

  // State สำหรับข้อมูลฟอร์ม
  const [firstname, setFirstname] = useState("");
  const [fullname, setFullname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);
  const [fadeIn, setFadeIn] = useState(false);

  // โหลดข้อมูลผู้ใช้จาก API เมื่อ mount
  useEffect(() => {
    setFadeIn(true);
    async function fetchUser() {
      try {
        const res = await fetch(`https://backend-nextjs-virid.vercel.app/api/users/${id}`);
        if (!res.ok) throw new Error("Failed to fetch user data");
        const data = await res.json();

        // สมมติ data เป็น object ของ user
        setFirstname(data.firstname || "");
        setFullname(data.fullname || "");
        setLastname(data.lastname || "");
        setUsername(data.username || "");
        setPassword(data.password || "");
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "เกิดข้อผิดพลาด",
          text: "ไม่สามารถโหลดข้อมูลผู้ใช้ได้",
        });
      }
    }
    fetchUser();
  }, [id]);

  // ฟังก์ชันส่งข้อมูลแก้ไข
  const handleUpdateSubmit = async (e) => {
    e.preventDefault();

    if (
      !firstname ||
      !fullname.trim() ||
      !lastname.trim() ||
      !username.trim() ||
      !password.trim()
    ) {
      Swal.fire({
        icon: "error",
        title: "<h3>กรุณากรอกข้อมูลให้ครบถ้วน</h3>",
        showConfirmButton: false,
        timer: 2000,
      });
      return;
    }

    try {
      const res = await fetch("https://backend-nextjs-virid.vercel.app/api/users", {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          firstname,
          fullname,
          lastname,
          username,
          password,
        }),
      });

      const result = await res.json();
      if (res.ok) {
        Swal.fire({
          icon: "success",
          title: "<h3>ปรับปรุงข้อมูลเรียบร้อยแล้ว</h3>",
          showConfirmButton: false,
          timer: 2000,
        }).then(() => {
          router.push("/register"); // หรือหน้าอื่นตามต้องการ
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "ไม่สามารถปรับปรุงข้อมูลได้",
          text: result.message || "",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "ข้อผิดพลาดเครือข่าย",
        text: "ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์ได้",
      });
    }
  };

  // Styles
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
          maxWidth: 420,
          padding: "2rem",
          borderRadius: 12,
          backgroundColor: "rgba(175, 175, 175, 0.95)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
        }}
      >
        <h1
          style={{
            width: "100%",
            textAlign: "center",
            color: "#0d6efd",
            marginBottom: "1.5rem",
            userSelect: "none",
            whiteSpace: "nowrap",
          }}
        >
          แก้ไขข้อมูลผู้ใช้ {id}
        </h1>

        <form onSubmit={handleUpdateSubmit} noValidate>
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
            ปรับปรุงข้อมูล
          </button>
        </form>
      </main>
    </div>
  );
}
