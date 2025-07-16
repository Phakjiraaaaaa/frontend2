'use client';

import Link from "next/link";

export default function Navigation() {
  return (
    <nav style={{ padding: "1rem", borderBottom: "2px solid #ddd", backgroundColor: "#fcefee" }}>
      <ul style={{ display: "flex", gap: "1.5rem", listStyle: "none", margin: 0, padding: 0 }}>
        {[
          { href: "/", label: "หน้าแรก" },
          { href: "/about", label: "เกี่ยวกับ" },
          { href: "/service", label: "บริการ" },
          { href: "/contact", label: "ติดต่อ" },
        ].map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              style={{
                textDecoration: "none",
                color: "#444",
                fontWeight: "bold",
                padding: "0.5rem 1rem",
                borderRadius: "10px",
                transition: "all 0.3s ease",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#aee1f9"; // pastel blue
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.transform = "scale(1.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#444";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
