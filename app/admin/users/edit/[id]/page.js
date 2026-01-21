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

  // เพิ่ม State ใหม่
  const [address, setAddress] = useState("");
  const [sex, setSex] = useState("");
  const [birthday, setBirthday] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
    async function fetchUser() {
      try {
        const token = localStorage.getItem("token");
        // แนบ Token ในการดึงข้อมูลด้วย
        const res = await fetch(
          `https://backend024-seven.vercel.app/api/users/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          },
        );

        if (!res.ok) throw new Error("Failed to fetch user data");
        const data = await res.json();

        setFirstname(data.firstname || "");
        setFullname(data.fullname || "");
        setLastname(data.lastname || "");

        // set ค่าฟิลด์ใหม่
        setAddress(data.address || "");
        setSex(data.sex || "");
        // แปลงวันที่สำหรับ input type="date"
        if (data.birthday) {
          setBirthday(data.birthday.split("T")[0]);
        }

        setUsername(data.username || "");
        // Password มักจะไม่ส่งกลับมา หรือถ้าส่งมาก็ set ไว้ (แต่ปกติหลังบ้านจะ hash)
        // setPassword(data.password || "");
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "เกิดข้อผิดพลาด",
          text: "ไม่สามารถโหลดข้อมูลผู้ใช้ได้",
        });
      }
    }
    if (id) {
      fetchUser();
    }
  }, [id]);

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();

    if (
      !firstname ||
      !fullname.trim() ||
      !lastname.trim() ||
      !username.trim() ||
      // ตรวจสอบฟิลด์ใหม่
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

    try {
      const token = localStorage.getItem("token");

      // 1. แก้ URL ให้ส่ง ID เป็น Param
      const res = await fetch(
        `https://backend024-seven.vercel.app/api/users/${id}`,
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            // แนบ Token
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            // ไม่ต้องส่ง id ใน body แล้วเพราะส่งใน url (แต่ถ้าหลังบ้านต้องการก็ใส่ได้)
            firstname,
            fullname,
            lastname,
            // ส่งฟิลด์ใหม่
            address,
            sex,
            birthday,
            username,
            password: password || undefined, // ส่ง password เฉพาะเมื่อมีการแก้ไข
          }),
        },
      );

      const result = await res.json();
      if (res.ok) {
        Swal.fire({
          icon: "success",
          title: "<h3>ปรับปรุงข้อมูลเรียบร้อยแล้ว</h3>",
          showConfirmButton: false,
          timer: 2000,
        }).then(() => {
          // แก้เป็นกลับไปหน้า admin users หรือหน้า dashboard แทน register
          router.push("/admin/users");
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
        minHeight: "100vh", // แก้เป็น minHeight เผื่อจอยาว
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
        padding: "20px 0",
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

          {/* --- เพิ่ม Input ใหม่ --- */}
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
          {/* --- จบส่วน Input ใหม่ --- */}

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

          <label>รหัสผ่าน (กรอกเมื่อต้องการเปลี่ยน)</label>
          <div style={{ position: "relative", marginBottom: 12 }}>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="เว้นว่างไว้หากไม่เปลี่ยน"
              style={{
                ...inputBaseStyle,
                paddingRight: 40,
                ...(focusedInput === "password" ? inputFocusStyle : {}),
              }}
              onFocus={() => setFocusedInput("password")}
              onBlur={() => setFocusedInput(null)}
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
