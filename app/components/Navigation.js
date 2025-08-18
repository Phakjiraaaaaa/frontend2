"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navigation() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const baseColor = "#1f1f1fff";
  const hoverColor = "#7d7dff";

 
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

  const handleToggle = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const handleLinkClick = () => {
    setIsNavbarOpen(false);
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
       
        <Link
          href="/"
          className="navbar-brand d-flex align-items-center gap-2"
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: baseColor,
            transition: "all 0.3s ease",
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

        <div
          className={`collapse navbar-collapse ${isNavbarOpen ? "show" : ""}`}
          id="navbarNav"
        >
          {/* 🔹 เมนูซ้าย */}
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

          {/* 🔹 เมนูขวา */}
          <ul
            className="navbar-nav ms-auto"
            style={{ display: "flex", gap: "0.6rem" }} 
          >
            {[
              { href: "/login", label: "Login", color: "#1E90FF" },       
              { href: "/register", label: "สมัครสมาชิก", color: "#28a745" }, 
              { href: "/admin/users", label: "Admin", color: "#dc3545" },       
            ].map(({ href, label, color }) => (
              <li className="nav-item" key={href}>
                <Link
                  href={href}
                  className="nav-link"
                  style={{
                    ...navLinkStyle,
                    backgroundColor: color,
                    color: "#fff",
                    borderRadius: "5px",
                    padding: "0.4rem 0.9rem",
                    textAlign: "center",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.1)";
                    e.currentTarget.style.boxShadow = `0 0 8px ${color}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                  onClick={handleLinkClick}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
