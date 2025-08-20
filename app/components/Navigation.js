"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function Navigation() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [tokenState, setToken] = useState("");
  const router = useRouter();

  // อ่าน token จาก localStorage ตอน mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);
  }, []);

  // โหลด Bootstrap JS
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  // ออกระบบพร้อมยืนยัน
  const handleSignOut = () => {
    Swal.fire({
      title: "คุณแน่ใจไหม?",
      text: "ออกจากระบบ!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "ใช่!",
      cancelButtonText: "ยกเลิก",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("token");
        setToken(null);
        router.push("/login");
        Swal.fire("ออกจากระบบเรียบร้อย!", "", "success");
      }
    });
  };

  const handleToggle = () => setIsNavbarOpen(!isNavbarOpen);
  const handleLinkClick = () => setIsNavbarOpen(false);

  // Styles
  const baseColor = "#1f1f1fff";
  const hoverColor = "#7d7dff";
  const fontFamily = "'Prompt', sans-serif";

  const navLinkStyle = {
    fontSize: "1.1rem",
    fontWeight: "500",
    letterSpacing: "0.5px",
    color: baseColor,
    transition: "all 0.3s ease",
    textDecoration: "none",
    display: "inline-block",
    cursor: "pointer",
    textShadow: "0px 1px 2px rgba(0,0,0,0.1)",
    fontFamily: fontFamily,
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = "scale(1.15)";
    e.currentTarget.style.color = hoverColor;
    e.currentTarget.style.textShadow = "0px 0px 6px rgba(125,125,255,0.6)";
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = "scale(1.0)";
    e.currentTarget.style.color = baseColor;
    e.currentTarget.style.textShadow = "0px 1px 2px rgba(0,0,0,0.1)";
  };

  return (
    <nav
      className="navbar navbar-expand-lg shadow-sm"
      style={{
        background: "linear-gradient(90deg, #7c7c7cff, #fafafa)",
        borderBottom: "2px solid #ccc",
        padding: "1rem 1.5rem",
      }}
    >
      <div className="container-fluid">
        {/* Logo */}
        <Link
          href="/"
          className="navbar-brand d-flex align-items-center gap-2"
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: baseColor,
            transition: "all 0.3s ease",
            fontFamily: fontFamily,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = hoverColor)}
          onMouseLeave={(e) => (e.currentTarget.style.color = baseColor)}
        >
          <img
            src="/images/silders/logo.png"
            alt="โลโก้"
            width={45}
            height={45}
            style={{ objectFit: "contain" }}
          />
          Sneakerss Brand
        </Link>

        {/* Toggle button สำหรับมือถือ */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleToggle}
          aria-controls="navbarNav"
          aria-expanded={isNavbarOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* เมนู */}
        <div
          className={`collapse navbar-collapse ${isNavbarOpen ? "show" : ""}`}
          id="navbarNav"
        >
          {/* เมนูซ้าย */}
          <ul className="navbar-nav" style={{ display: "flex", gap: "1rem" }}>
            {[
              { href: "/", label: "หน้าแรก" },
              { href: "/about", label: "เกี่ยวกับเรา" },
              { href: "/service", label: "บริการ" },
              { href: "/contact", label: "ติดต่อ" },
            ].map(({ href, label }) => (
              <li className="nav-item" key={href}>
                <Link
                  href={href}
                  className="nav-link"
                  style={navLinkStyle}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onClick={handleLinkClick}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* เมนูขวา */}
          <ul className="navbar-nav ms-auto" style={{ display: "flex", gap: "0.6rem" }}>
            {tokenState ? (
              <li className="nav-item">
                <button
                  type="button"
                  onClick={handleSignOut}
                  className="btn btn-outline-danger d-flex align-items-center gap-1"
                  style={{
                    fontFamily: fontFamily,
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.backgroundColor = "#d33";
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1.0)";
                    e.currentTarget.style.backgroundColor = "";
                    e.currentTarget.style.color = "";
                  }}
                >
                  <i className="bi bi-box-arrow-right"></i> Sign Out
                </button>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link
                    href="/login"
                    className="btn btn-outline-primary d-flex align-items-center gap-1"
                  >
                    <i className="bi bi-box-arrow-in-right"></i> Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/register" className="btn btn-success">
                    สมัครสมาชิก
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
