"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navigation() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const baseColor = "#5a5a5a";
  const hoverColor = "#7d7dff";

  const navLinkStyle = {
    fontSize: "1rem",
    color: baseColor,
    transition: "all 0.3s ease",
    textDecoration: "none",
    display: "inline-block",
    cursor: "pointer",
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = "scale(1.1)";
    e.currentTarget.style.color = hoverColor;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = "scale(1.0)";
    e.currentTarget.style.color = baseColor;
  };

  const handleToggle = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const handleLinkClick = () => {
    setIsNavbarOpen(false);
  };

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        backgroundColor: "#f0f0f0",
        borderBottom: "1px solid #ccc",
        padding: "0.75rem 1rem",
      }}
    >
      <div className="container-fluid">
        <Link
          href="/"
          className="navbar-brand"
          style={{ fontSize: "1.25rem", color: baseColor }}
        >
          Phakjiraaaaa
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
          {/* เมนูซ้าย */}
          <ul className="navbar-nav">
            {[ 
              { href: "/", label: "หน้าแรก" },
              { href: "/about", label: "เกี่ยวกับ" },
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
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                href="/login"
                className="nav-link"
                style={navLinkStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleLinkClick}
              >
                เข้าสู่ระบบ
              </Link>
            </li>

            <li className="nav-item">
              <Link
                href="/register"
                className="nav-link"
                style={{ ...navLinkStyle, color: "#28a745" }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleLinkClick}
              >
                สมัครสมาชิก
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
