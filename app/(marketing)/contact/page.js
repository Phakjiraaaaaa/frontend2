"use client";
import { useState } from "react";
import Image from "next/image";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [activeMethod, setActiveMethod] = useState("form");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("ส่งข้อความเรียบร้อยแล้ว! เราจะติดต่อกลับโดยเร็วที่สุด");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const contactInfo = {
    email: "phakjira050349@gmail.com",
    phone: "092-xxx-xxxx",
    address: "วิทยาลัยเทคนิคเชียงใหม่ 9 ถนนเวียงแก้ว ตำบลศรีภูมิ อำเภอเมืองเชียงใหม่ 50200",
    workingHours: "ทุกวัน: 9:00 - 17:00 น.",
    socialMedia: [
      { name: "Instagram", icon: "bi-instagram", color: "#ff0066ff", link: "https://www.instagram.com/_phakjiraaaaaa?igsh=MTAxczZwd2drZjQ4bA==" },
      { name: "Facebook", icon: "bi-facebook", color: "#0008e4ff", link: "https://www.facebook.com/share/1AnghNXN5p/" },
      { name: "GitHub", icon: "bi-github", color: "#000000ff", link: "https://github.com/Phakjiraaaaaa" },
    ],
  };

  return (
    <div className="container my-5">
      {/* Header */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold mb-3" style={{ color: "#12e3d8ff" }}>ติดต่อร้านรองเท้า</h1>
        <p className="lead mb-4">มีคำถามเกี่ยวกับสินค้า หรืออยากสั่งซื้อจำนวนมาก? ติดต่อเราได้เลย!</p>
        <div className="d-flex justify-content-center gap-3 mb-4">
          {contactInfo.socialMedia.map((social, index) => (
            <a key={index} href={social.link} className="text-decoration-none" target="_blank" rel="noopener noreferrer">
              <div style={{
                width: "50px", height: "50px", background: social.color, borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "all 0.3s ease", boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              }}>
                <i className={`bi ${social.icon} fs-4 text-white`}></i>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="row mb-4">
        <div className="col-12">
          <ul className="nav nav-pills nav-fill">
            <li className="nav-item">
              <button className={`nav-link ${activeMethod === "form" ? "active" : ""}`} onClick={() => setActiveMethod("form")}
                style={{ background: activeMethod === "form" ? "#ff003cff" : "transparent", color: activeMethod === "form" ? "white" : "#666", borderRadius: "30px", padding: "10px 20px", margin: "0 5px", border: "none" }}>
                <i className="bi bi-envelope-fill me-2"></i>สอบถามสินค้า
              </button>
            </li>
            <li className="nav-item">
              <button className={`nav-link ${activeMethod === "info" ? "active" : ""}`} onClick={() => setActiveMethod("info")}
                style={{ background: activeMethod === "info" ? "#00b7d3ff" : "transparent", color: activeMethod === "info" ? "white" : "#666", borderRadius: "30px", padding: "10px 20px", margin: "0 5px", border: "none" }}>
                <i className="bi bi-info-circle-fill me-2"></i>ข้อมูลติดต่อ
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Tab Content */}
      <div className="row">
        <div className="col-12">
          <div className="p-4 rounded-4 shadow-sm" style={{
            background: activeMethod === "form" ? "rgba(255, 133, 162, 0.11)" :
                       "rgba(0, 183, 211, 0.12)"
          }}>
            {/* Form */}
            {activeMethod === "form" && (
              <div className="row">
                <div className="col-lg-6">
                  <h3 style={{ color: "#ff003cff" }}><i className="bi bi-chat-heart-fill me-2"></i>สอบถามสินค้า</h3>
                  <form onSubmit={handleSubmit}>
                    {["name", "email", "subject", "message"].map((field) => (
                      <div className="mb-3" key={field}>
                        <label htmlFor={field} className="form-label">
                          {field === "name" ? "ชื่อ-นามสกุล" : field === "email" ? "อีเมล" : field === "subject" ? "หัวข้อ" : "ข้อความ"}
                        </label>
                        {field !== "message" ? (
                          <input type={field === "email" ? "email" : "text"} className="form-control" id={field} name={field}
                            value={formData[field]} onChange={handleChange} required
                            style={{ borderRadius: "15px", padding: "12px 15px", border: "1px solid #eeb0c1ff" }} />
                        ) : (
                          <textarea className="form-control" id={field} name={field} value={formData[field]} onChange={handleChange} rows="4" required
                            style={{ borderRadius: "15px", padding: "12px 15px", border: "1px solid #eeb0c1ff" }}></textarea>
                        )}
                      </div>
                    ))}
                    <button type="submit" className="btn px-4 py-2" style={{ background: "#fa003aff", color: "white", borderRadius: "30px" }}>
                      <i className="bi bi-send-fill me-2"></i>ส่งข้อความ
                    </button>
                  </form>
                </div>
                <div className="col-lg-6 d-flex align-items-center justify-content-center">
                  <Image src="/images/silders/Phai.jpg" alt="ติดต่อร้านรองเท้า" width={300} height={300} className="rounded-circle shadow" style={{ objectFit: "cover", border: "5px solid white" }} />
                </div>
              </div>
            )}

            {/* Info */}
            {activeMethod === "info" && (
              <div>
                <h4 className="mb-4" style={{ color: "#00b7d3ff" }}><i className="bi bi-geo-alt-fill me-2"></i>ข้อมูลติดต่อ</h4>
                <div className="row">
                  <div className="col-lg-6 d-flex flex-column gap-3 mb-4">
                    {[
                      { icon: "bi-envelope-fill", title: "อีเมล", value: contactInfo.email },
                      { icon: "bi-telephone-fill", title: "เบอร์โทรศัพท์", value: contactInfo.phone },
                      { icon: "bi-geo-alt-fill", title: "ที่อยู่", value: contactInfo.address },
                      { icon: "bi-clock-fill", title: "เวลาทำการ", value: contactInfo.workingHours },
                    ].map((item, idx) => (
                      <div key={idx} className="p-3 rounded-3 shadow-sm" style={{ background: "#c2f6ffff" }}>
                        <div className="d-flex align-items-center gap-3">
                          <div style={{ background: "#00b7d3ff", width: "40px", height: "40px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <i className={`bi ${item.icon} text-white`}></i>
                          </div>
                          <div>
                            <h6 className="fw-bold m-0">{item.title}</h6>
                            <small>{item.value}</small>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="col-lg-6">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4790.251117770331!2d98.9839193!3d18.7928973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3a9a71d80adf%3A0xe41f657fc5052416!2z4Lin4Li04LiX4Lii4Liy4Lil4Lix4Lii4LmA4LiX4LiE4LiZ4Li04LiE4LmA4LiK4Li14Lii4LiH4LmD4Lir4Lih4LmI!5e1!3m2!1sth!2sth!4v1753104349691!5m2!1sth!2sth"
                      width="100%" height="100%" style={{ border: 0, minHeight: "300px", borderRadius: "10px" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
