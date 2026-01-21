"use client";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useParams, useRouter } from "next/navigation";

export default function EditUser() {
  const router = useRouter();
  const params = useParams();
  const id = params.id;

  // State
  const [firstname, setFirstname] = useState("");
  const [fullname, setFullname] = useState("");
  const [lastname, setLastname] = useState("");
  const [address, setAddress] = useState("");
  const [sex, setSex] = useState("");
  const [birthday, setBirthday] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const [showPassword, setShowPassword] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);
  const [fadeIn, setFadeIn] = useState(false);
  
  // ✅ เก็บ Role
  const [currentUserRole, setCurrentUserRole] = useState("");

  useEffect(() => {
    setFadeIn(true);
    // ✅ ดึง Role มาเก็บไว้
    const role = localStorage.getItem("role");
    setCurrentUserRole(role);

    async function fetchUser() {
      try {
        const token = localStorage.getItem("token");
        
        // ถ้าไม่มี Token ดีดออก
        if (!token) {
            router.push("/login");
            return;
        }

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
        
        // Handle array or object
        const user = Array.isArray(data) ? data[0] : data;

        setFirstname(user.firstname || "");
        setFullname(user.fullname || "");
        setLastname(user.lastname || "");
        setAddress(user.address || "");
        setSex(user.sex || "");
        if (user.birthday) {
          setBirthday(user.birthday.split("T")[0]);
        }
        setUsername(user.username || "");
        
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "เกิดข้อผิดพลาด",
          text: "ไม่สามารถโหลดข้อมูลผู้ใช้ได้",
        }).then(() => {
            // Error แล้วเด้งกลับตาม Role
            if (role === 'admin') router.push("/admin/users");
            else router.push("/");
        });
      }
    }
    if (id) {
      fetchUser();
    }
  }, [id, router]);

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();

    if (
      !firstname || !fullname.trim() || !lastname.trim() ||
      !username.trim() || !address.trim() || !sex || !birthday
    ) {
      Swal.fire({
        icon: "warning",
        title: "<h3>กรุณากรอกข้อมูลให้ครบถ้วน</h3>",
        showConfirmButton: false,
        timer: 2000,
      });
      return;
    }

    try {
      const token = localStorage.getItem("token");

      const res = await fetch(
        `https://backend024-seven.vercel.app/api/users/${id}`,
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            firstname,
            fullname,
            lastname,
            address,
            sex,
            birthday,
            username,
            password: password || undefined,
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
          // ✅ Redirect ตาม Role
          if (currentUserRole === 'admin') {
            router.push("/admin/users");
          } else {
            router.push("/");
          }
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

  const handleCancel = () => {
    // ✅ ปุ่มยกเลิกทำงานตาม Role
    if (currentUserRole === 'admin') {
        router.push("/admin/users");
    } else {
        router.push("/");
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
        minHeight: "100vh",
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
          {/* เปลี่ยนหัวข้อตามบริบท */}
          {currentUserRole === 'admin' ? `แก้ไขข้อมูลผู้ใช้ ${id}` : 'แก้ไขข้อมูลส่วนตัว'}
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
            บันทึกการเปลี่ยนแปลง
          </button>

          {/* ปุ่มยกเลิก */}
          <div className="text-center mt-3">
            <button 
                type="button" 
                onClick={handleCancel}
                style={{
                    background: 'none',
                    border: 'none',
                    color: '#6c757d',
                    textDecoration: 'underline',
                    cursor: 'pointer'
                }}
            >
                ยกเลิก
            </button>
          </div>

        </form>
      </main>
    </div>
  );
}