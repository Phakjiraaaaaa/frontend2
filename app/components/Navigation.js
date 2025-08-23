"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function Navigation() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [tokenState, setToken] = useState("");
  const [activeLink, setActiveLink] = useState("/");
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const router = useRouter();

  const fontFamily = "'Prompt', sans-serif";
  const baseColor = "#1f1f1fff";
  const hoverColor = "#7d7dff";

  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);
    setActiveLink(window.location.pathname);

    const updateCart = () => {
      const newCart = JSON.parse(localStorage.getItem("cart") || "[]");
      setCartItems(newCart);
      setCartCount(newCart.length);
    };

    // โหลดครั้งแรก
    updateCart();

    // ฟังทั้ง storage (เปิดหลายแท็บ) และ cartUpdated (ในแท็บเดียวกัน)
    window.addEventListener("storage", updateCart);
    window.addEventListener("cartUpdated", updateCart);

    return () => {
      window.removeEventListener("storage", updateCart);
      window.removeEventListener("cartUpdated", updateCart);
    };
  }, []);

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

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
        Swal.fire({
          title: "กำลังออกจากระบบ...",
          timer: 2000,
          didOpen: () => Swal.showLoading(),
          showConfirmButton: false,
        });

        setTimeout(() => {
          localStorage.removeItem("token");
          setToken(null);
          Swal.fire({
            title: "ออกจากระบบเรียบร้อย!",
            icon: "success",
            timer: 1500,
            showConfirmButton: false,
          }).then(() => router.push("/login"));
        }, 2000);
      }
    });
  };

  const handleToggle = () => setIsNavbarOpen(!isNavbarOpen);
  const handleLinkClick = (href) => {
    setActiveLink(href);
    setIsNavbarOpen(false);
  };

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

  const menuItems = [
    { href: "/", label: "หน้าแรก" },
    { href: "/about", label: "เกี่ยวกับเรา" },
    { href: "/service", label: "บริการ" },
    { href: "/contact", label: "ติดต่อ" },
  ];

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
            {menuItems.map(({ href, label }) => (
              <li className="nav-item" key={href}>
                <Link
                  href={href}
                  className="nav-link"
                  style={{
                    ...navLinkStyle,
                    color: activeLink === href ? hoverColor : baseColor,
                    transform: activeLink === href ? "scale(1.15)" : "scale(1)",
                    textShadow:
                      activeLink === href
                        ? "0px 0px 6px rgba(125,125,255,0.6)"
                        : "0px 1px 2px rgba(0,0,0,0.1)",
                  }}
                  onMouseEnter={() => setActiveLink(href)}
                  onClick={() => handleLinkClick(href)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* เมนูขวา: Login/Logout + ตะกร้า */}
          <ul
            className="navbar-nav ms-auto"
            style={{ display: "flex", gap: "0.6rem", alignItems: "center" }}
          >
            {/* ปุ่ม Login/Logout */}
            {tokenState ? (
              <li className="nav-item">
                <button
                  type="button"
                  onClick={handleSignOut}
                  className="btn"
                  style={{
                    backgroundColor: "#dc3545",
                    color: "#fff",
                    border: "none",
                    fontFamily: fontFamily,
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#c82333";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#dc3545";
                  }}
                >
                  <i className="bi bi-box-arrow-right"></i> Logout
                </button>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <button
                    className="btn"
                    style={{
                      backgroundColor: "#007bff",
                      color: "#fff",
                      border: "none",
                      fontFamily: fontFamily,
                      transition: "all 0.3s ease",
                    }}
                    onClick={() => router.push("/login")}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#0069d9";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#007bff";
                    }}
                  >
                    <i className="bi bi-box-arrow-in-right"></i> Login
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="btn"
                    style={{
                      backgroundColor: "#28a745",
                      color: "#fff",
                      border: "none",
                      fontFamily: fontFamily,
                      transition: "all 0.3s ease",
                    }}
                    onClick={() => router.push("/register")}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#218838";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#28a745";
                    }}
                  >
                    สมัครสมาชิก
                  </button>
                </li>
              </>
            )}

            {/* ปุ่มตะกร้า */}
            <li className="nav-item position-relative">
              <Link
                href="/basket"
                style={{
                  backgroundColor: "#ffc107",
                  width: "30px",
                  height: "30px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "8px",
                  color: "#000",
                  border: "none",
                  fontFamily: fontFamily,
                  transition: "all 0.3s ease",
                  fontSize: "1.3rem",
                  position: "relative",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#e0a800";
                  e.currentTarget.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#ffc107";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <i className="bi bi-cart-fill"></i>
                {cartCount > 0 && (
                  <span
                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                    style={{ fontSize: "0.75rem" }}
                  >
                    {cartCount}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}