"use client";
import { useState, useEffect } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // ตรวจสอบความถูกต้องของอีเมล
    if (!email || !email.includes("@") || !email.includes(".")) {
      setError("กรุณากรอกอีเมลให้ถูกต้อง");
      return;
    }

    // ล้าง error และเริ่มโหลด
    setError("");
    setLoading(true);

    // สมมติว่าเรียก API สำเร็จ
    setTimeout(() => {
      setSuccess(true);
      setEmail("");
      setLoading(false);
    }, 2000);
  };

  // ปิดข้อความ success อัตโนมัติ
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  return (
    <div
      className="container mt-5"
      style={{
        maxWidth: "400px",
        border: "1px solid #ccc",
        borderRadius: "5%",
        padding: "20px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
      }}
    >
      <h1 className="text-center mb-4">ลืมรหัสผ่าน</h1>

      {success && (
        <div className="alert alert-success" role="alert">
          ส่งลิงก์รีเซ็ตรหัสผ่านเรียบร้อย! โปรดตรวจสอบอีเมลของคุณ
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">อีเมล</label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="กรอกอีเมลของคุณ"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />
          {error && (
            <div className="text-danger small mt-1">
              {error}
            </div>
          )}
        </div>

        <div className="d-grid mb-4">
          {loading ? (
            <button className="btn btn-secondary btn-lg py-3" disabled>
              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
              กำลังส่ง...
            </button>
          ) : (
            <button
              type="submit"
              className="btn btn-lg py-3"
              style={{
                background: 'linear-gradient(135deg, #ff0055ff, #325ab7ff)',
                border: 'none',
                borderRadius: '12px',
                color: 'white',
                fontWeight: '600',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.3)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
              disabled={loading || success}
            >
              <i className="bi bi-envelope-check me-2"></i>
              ยืนยัน
            </button>
          )}
        </div>

        <div className="text-center">
          <a href="/login" className="text-decoration-none text-primary">
            กลับไปหน้าเข้าสู่ระบบ
          </a>
        </div>
      </form>
    </div>
  );
}