"use client";

import Image from "next/image";
import { useState } from "react";

export default function About() {
  const [activeTab, setActiveTab] = useState("story");

  // ข้อมูลส่วนตัว
  const personalInfo = {
    name: "Phakjira Pakphian",
    nickname: "Phai",
    role: "Online shoe seller & owner Sneakerss Brand",
    bio: "ฉันเป็นแม่ค้ารองเท้าออนไลน์ที่มีความหลงใหลในแฟชั่นและการบริการลูกค้า ด้วยประสบการณ์หลายปีในการขายผ่านช่องทางโซเชียล ฉันมุ่งมั่นนำเสนอรองเท้าคุณภาพดีในราคาจับต้องได้ พร้อมบริการที่จริงใจ",
    quote: "ความมั่นใจเริ่มต้นที่รองเท้าคู่โปรดของคุณ",
    skills: [
      {
        name: "การตลาดออนไลน์",
        description:
          "รู้จักช่องทางการโปรโมตสินค้าทั้ง Facebook, IG,TikTok เพื่อเพิ่มยอดขาย",
      },
      {
        name: "การถ่ายภาพสินค้า",
        description:
          "ถ่ายรองเท้าให้ดูโดดเด่นดึงดูดลูกค้าด้วยภาพที่สวยและดูจริง",
      },
      {
        name: "บริการลูกค้า",
        description: "ตอบแชทไว ให้ข้อมูลครบ ดูแลลูกค้าด้วยความจริงใจ",
      },
      {
        name: "การจัดการโซเชียลมีเดีย",
        description:
          "บริหารเพจให้มีชีวิตชีวาอัปเดตตลอดสร้างการมีส่วนร่วมกับลูกค้า",
      },
      {
        name: "การสร้างแบรนด์",
        description: "ออกแบบร้านให้ดูน่าเชื่อถือมีสไตล์เฉพาะตัวให้ลูกค้าจดจำ",
      },
    ],
    education: [
      {
        degree: "ระดับประกาศนียบัตรวิชาชีพชั้นสูง",
        school: "วิทยาลัยเทคนิคเชียงใหม่",
        year: "2568-Present",
      },
      {
        degree: "ระดับประกาศนียบัตรวิชาชีพ",
        school: "วิทยาลัยเทคนิคเชียงคำ",
        year: "2565-2567",
      },
    ],
    experience: [
      {
        position: "เจ้าของร้านรองเท้าออนไลน์",
        company: "Sneakerss Brand",
        year: "2565-ปัจจุบัน",
      },
      {
        position: "ผู้ช่วยขายของออนไลน์",
        company: "ร้านรองเท้า PhaiStyle",
        year: "2564-2565",
      },
    ],
    socialMedia: [
      {
        platform: "Instagram",
        handle: "@_phakjiraaaaaa",
        icon: "bi-instagram",
        link: "https://www.instagram.com/_phakjiraaaaaa?igsh=MTAxczZwd2drZjQ4bA==",
      },
      {
        platform: "Facebook",
        handle: "Sneakerss Brand",
        icon: "bi-facebook",
        link: "https://www.facebook.com/share/1AnghNXN5p/",
      },
      {
        platform: "TikTok",
        handle: "@_phakjiraaaaaa",
        icon: "bi-tiktok",
        link: "https://www.tiktok.com",
      },
    ],
  };

  const tabs = [
    {
      id: "story",
      label: "เรื่องราวของฉัน",
      icon: "bi-book",
      color: "#ff85a2",
    },
    {
      id: "skills",
      label: "ทักษะและความสามารถ",
      icon: "bi-stars",
      color: "#7ec4cf",
    },
    {
      id: "experience",
      label: "ประสบการณ์",
      icon: "bi-briefcase",
      color: "#b892ff",
    },
  ];

  return (
    <div className="container my-5">
      {/* Header Section */}
      <div className="row align-items-center mb-5">
        <div className="col-lg-5 text-center mb-4 mb-lg-0">
          <div
            className="position-relative"
            style={{ width: "300px", height: "300px", margin: "0 auto" }}
          >
            <Image
              src="/images/silders/Phai.jpg"
              alt={personalInfo.name}
              fill
              style={{ objectFit: "cover", border: "5px solid white" }}
              className="rounded-circle shadow"
              priority
            />
            <div
              className="position-absolute"
              style={{
                bottom: "10px",
                right: "10px",
                background: "#e893f9ff",
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                border: "3px solid white",
                textAlign: "center", 
                lineHeight: 0, 
              }}
            >
              <i className="bi bi-compass-fill fs-4 text-white"></i>
            </div>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="p-4 rounded-4 shadow-sm">
            <h1
              className="display-5 fw-bold mb-2"
              style={{ color: "#7c0c93ff" }}
            >
              {personalInfo.name}
            </h1>
            <h3 className="fs-4 mb-3 text-secondary">
              "{personalInfo.nickname}" - {personalInfo.role}
            </h3>
            <p className="lead mb-4">{personalInfo.bio}</p>
            <div className="d-flex gap-3 mb-3">
              {personalInfo.socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  <div
                    style={{
                      width: "45px",
                      height: "45px",
                      background: "#7c0c93ff",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                    }}
                  >
                    <i className={`bi ${social.icon} fs-5 text-white`}></i>
                  </div>
                </a>
              ))}
            </div>
            <div className="p-3 rounded-3 mb-3" style={{ background: "white" }}>
              <p className="fst-italic mb-0">"{personalInfo.quote}"</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="row mb-4">
        <div className="col-12">
          <ul className="nav nav-pills nav-fill">
            {tabs.map((tab) => (
              <li className="nav-item" key={tab.id}>
                <button
                  className={`nav-link ${activeTab === tab.id ? "active" : ""}`}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    background:
                      activeTab === tab.id ? tab.color : "transparent",
                    color: activeTab === tab.id ? "white" : "#666",
                    borderRadius: "30px",
                    padding: "10px 20px",
                    margin: "0 5px",
                    border: "none",
                    transition: "all 0.3s ease",
                  }}
                >
                  <i className={`${tab.icon} me-2`}></i>
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Tab Content */}
      <div className="row">
        <div className="col-12">
          <div
            className="p-4 rounded-4 shadow-sm"
            style={{
              background:
                activeTab === "story"
                  ? "rgba(255, 133, 162, 0.1)"
                  : activeTab === "skills"
                  ? "rgba(126, 196, 207, 0.1)"
                  : "rgba(184, 146, 255, 0.1)",
              minHeight: "300px",
            }}
          >
            {/* My Story Tab */}
            {activeTab === "story" && (
              <div>
                <h3 className="mb-4" style={{ color: "#ff85a2" }}>
                  <i className="bi bi-quote me-2"></i>เรื่องราวของฉัน
                </h3>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="card border-0 shadow-sm h-100">
                      <div className="card-body">
                        <h5 className="card-title mb-3">
                          <strong>จุดเริ่มต้นของร้านออนไลน์</strong>
                        </h5>
                        <p className="card-text">
                          ฉันเริ่มต้นขายรองเท้าออนไลน์จากความชอบส่วนตัวในแฟชั่น
                          โดยเฉพาะรองเท้าผ้าใบสวย ๆ ที่ใส่สบายและเข้ากับทุกลุค
                          และเห็นโอกาสจากตลาดออนไลน์ที่เติบโตอย่างรวดเร็ว
                          ฉันเริ่มจากการไลฟ์สดขายรองเท้า
                          สู่การสร้างแบรนด์เป็นของตัวเองในชื่อ{" "}
                          <strong>"Sneakerss Brand"</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="card border-0 shadow-sm h-100">
                      <div className="card-body">
                        <h5 className="card-title mb-3">
                          <strong>แรงบันดาลใจ</strong>
                        </h5>
                        <p className="card-text">
                          แรงบันดาลใจของฉันเริ่มจากความรักในรองเท้าและแฟชั่น
                          ฉันอยากให้ทุกคนที่ใส่รองเท้าของฉันรู้สึกมั่นใจและโดดเด่นในทุกก้าวเดิน
                          ด้วยความตั้งใจเลือกแต่สินค้าที่ทั้งสวยและใส่สบาย
                          เพื่อให้ลูกค้าได้รับรองเท้าคุณภาพดีที่คู่ควรจริงๆ
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Skills Tab */}
            {activeTab === "skills" && (
              <div>
                <h3 className="mb-4" style={{ color: "#7ec4cf" }}>
                  <i className="bi bi-lightning-charge me-2"></i>
                  ทักษะและความสามารถ
                </h3>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="card border-0 shadow-sm h-100">
                      <div className="card-body">
                        <h5 className="card-title mb-3">
                          <strong>ทักษะหลัก</strong>
                        </h5>
                        <ul className="list-group list-group-flush">
                          {personalInfo.skills.map((skill, index) => (
                            <li
                              key={index}
                              className="list-group-item border-0 d-flex flex-column align-items-start"
                            >
                              <div className="d-flex align-items-center mb-1">
                                <div
                                  style={{
                                    width: "30px",
                                    height: "30px",
                                    background: "#7ec4cf",
                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginRight: "15px",
                                  }}
                                >
                                  <i className="bi bi-check-lg text-white"></i>
                                </div>
                                <strong>{skill.name}</strong>
                              </div>
                              <small className="text-muted ps-5">
                                {skill.description}
                              </small>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="card border-0 shadow-sm h-100">
                      <div className="card-body">
                        <h5 className="card-title mb-3">
                          <strong>การศึกษา</strong>
                        </h5>
                        <ul className="list-group list-group-flush">
                          {personalInfo.education.map((edu, index) => (
                            <li
                              key={index}
                              className="list-group-item border-0"
                            >
                              <div className="d-flex justify-content-between">
                                <strong>{edu.degree}</strong>
                                <span
                                  className="badge rounded-pill"
                                  style={{
                                    background: "#7ec4cf",
                                    padding: "8px 12px",
                                  }}
                                >
                                  {edu.year}
                                </span>
                              </div>
                              <div>{edu.school}</div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Experience Tab */}
            {activeTab === "experience" && (
              <div>
                <h3 className="mb-4" style={{ color: "#b892ff" }}>
                  <i className="bi bi-briefcase me-2"></i>ประสบการณ์การทำงาน
                </h3>
                {personalInfo.experience.map((exp, index) => (
                  <div key={index} className="card border-0 shadow-sm mb-4">
                    <div className="card-body p-4">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <h5 className="card-title mb-0">{exp.position}</h5>
                        <span
                          className="badge rounded-pill"
                          style={{ background: "#b892ff", padding: "8px 12px" }}
                        >
                          {exp.year}
                        </span>
                      </div>
                      <h6 className="card-subtitle mb-3 text-muted">
                        {exp.company}
                      </h6>
                      <p className="card-text">
                        {index === 0
                          ? "ในฐานะเจ้าของร้านรองเท้าออนไลน์ ฉันดูแลตั้งแต่การคัดเลือกรองเท้าคุณภาพ การถ่ายภาพสินค้า และการโปรโมตร้านผ่านช่องทางโซเชียลมีเดีย"
                          : "ร่วมงานกับทีมการตลาดในการวางแผนแคมเปญโปรโมชันและการจัดการบริการลูกค้าอย่างมืออาชีพ"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div
        className="contact-container p-4 rounded-4 shadow-sm"
        style={{ backgroundColor: "#fff" }}
      >
        <h3 style={{ color: "#7c0c93ff", marginBottom: "1rem" }}>
          <strong>ติดต่อฉัน</strong>
        </h3>
        <p style={{ marginBottom: "1.5rem" }}>
          หากคุณสนใจรองเท้าคุณภาพและบริการดี ๆ จากฉัน สามารถติดต่อได้ที่:
        </p>
        <div className="buttons-wrapper d-flex flex-column gap-3">
          {personalInfo.socialMedia.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="social-button d-flex align-items-center"
            >
              <i className={`${social.icon} me-2`}></i>
              <strong>{social.platform}:</strong>&nbsp;{social.handle}
            </a>
          ))}
        </div>

        <style jsx>{`
          .social-button {
            padding: 12px 20px;
            border-radius: 30px;
            background-color: #f7cdffff;
            color: #7c0c93ff;
            font-weight: 600;
            text-decoration: none;
            transition: background-color 0.3s ease, color 0.3s ease;
            border: 2px solid transparent;
            max-width: 320px;
          }
          .social-button i {
            font-size: 1.3rem;
          }
          .social-button:hover {
            background-color: #7c0c93ff;
            color: white;
            border-color: #7c0c93ff;
            text-decoration: none;
          }
        `}</style>
      </div>
    </div>
  );
}
