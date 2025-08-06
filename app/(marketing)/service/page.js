"use client";
import { useState } from "react";
import Image from "next/image";

export default function ShoeStore() {
  const [activeCategory, setActiveCategory] = useState("all");

  const shoeProducts = [
    {
      id: 1,
      title: "รองเท้าผ้าใบผู้ชายรุ่น Urban",
      description: "ดีไซน์เรียบหรู ใส่ได้ทั้งวัน รองรับแรงกระแทก",
      image: "/images/shoe1.jpg",
      price: "1,290 บาท",
      category: "men",
      features: ["ระบายอากาศได้ดี", "พื้นยางกันลื่น", "มีไซส์ 39-45"],
    },
    {
      id: 2,
      title: "รองเท้าผ้าใบผู้หญิง",
      description: "น้ำหนักเบา สีพาสเทลสวย ใส่เดินเล่นหรือเที่ยวก็เหมาะ",
      image: "/images/shoe2.jpg",
      price: "990 บาท",
      category: "women",
      features: ["วัสดุผ้าตาข่าย", "สีพาสเทลหวาน", "มีไซส์ 35-40"],
    },
    {
      id: 3,
      title: "รองเท้าเด็ก",
      description: "ปลอดภัย พื้นนุ่มมาก ใส่แล้วเดินง่ายไม่ลื่น",
      image: "/images/shoe3.jpg",
      price: "590 บาท",
      category: "kids",
      features: ["กันลื่นดีเยี่ยม", "น้ำหนักเบามาก", "ลายการ์ตูน"],
    },
    {
      id: 4,
      title: "รองเท้าผู้ชาย",
      description: "แตะสไตล์มินิมอล ใส่สบาย ใช้งานทนทาน",
      image: "/images/shoe4.jpg",
      price: "490 บาท",
      category: "men",
      features: ["วัสดุ EVA", "ไม่ลื่นแม้เปียก", "พื้นนุ่ม"],
    },
    {
      id: 5,
      title: "รองเท้าผู้หญิง",
      description: "สายคาดไขว้ ใส่ออกงานได้ ใส่สบายทุกโอกาส",
      image: "/images/shoe5.jpg",
      price: "1,090 บาท",
      category: "women",
      features: ["สายหนังนิ่ม", "มีสีทอง/ดำ/ขาว", "ไซส์ 36-41"],
    },
    {
      id: 6,
      title: "รองเท้าเด็ก",
      description: "ปลอดภัย พื้นนุ่มมาก ใส่แล้วเดินง่ายไม่ลื่น",
      image: "/images/shoe3.jpg",
      price: "590 บาท",
      category: "kids",
      features: ["กันลื่นดีเยี่ยม", "น้ำหนักเบามาก", "ลายการ์ตูน"], 
    },
  ];

  const categories = [
    { id: "all", name: "ทั้งหมด", icon: "bi-grid-fill", color: "#ff85a2" },
    { id: "men", name: "ผู้ชาย", icon: "bi-person-fill", color: "#7ec4cf" },
    { id: "women", name: "ผู้หญิง", icon: "bi-person-hearts", color: "#b892ff" },
    { id: "kids", name: "เด็ก", icon: "bi-bicycle", color: "#ffc107" },
  ];

  const filteredProducts =
    activeCategory === "all"
      ? shoeProducts
      : shoeProducts.filter((p) => p.category === activeCategory);

  return (
    <div className="container my-5">
      {/* Header */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold mb-3" style={{ color: "#ff85a2" }}>
          รองเท้าทั้งหมด
        </h1>
        <p className="lead">เลือกสไตล์ของคุณจากสินค้าคุณภาพ</p>

        {/* Categories */}
        <div className="d-flex justify-content-center flex-wrap gap-3 mt-4">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`btn px-4 py-2 d-flex align-items-center gap-2 ${
                activeCategory === category.id ? "text-white" : "text-dark"
              }`}
              style={{
                background:
                  activeCategory === category.id ? category.color : "transparent",
                border: `1px solid ${category.color}`,
                borderRadius: "30px",
              }}
              onClick={() => setActiveCategory(category.id)}
            >
              <i className={`bi ${category.icon}`}></i>
              {category.name}
            </button>
          ))}
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-12">
          <div
            className="p-4 rounded-4 shadow-sm text-center"
            style={{ background: "rgba(255, 133, 162, 0.1)" }}
          >
            <h3 className="mb-3" style={{ color: "rgba(255, 133, 162, 1)" }}>
             <strong>🎉 โปรโมชันพิเศษ! </strong>  
            </h3>
            <p className="mb-4">
              ลดทันที 15% เมื่อสั่งซื้อครบ 1,500 บาท วันนี้ - สิ้นเดือนนี้เท่านั้น
            </p>
            <button
              className="btn px-4 py-2"
              style={{
                background: "#ff85a2",
                color: "white",
                borderRadius: "30px",
              }}
            >
              <i className="bi bi-lightning-fill me-2"></i>
              ดูโปรโมชัน
            </button>
          </div>
        </div>
      </div>

    
      <div className="row g-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="col-md-6 col-lg-4">
            <div className="card border-0 shadow-sm h-100 rounded-4 overflow-hidden">
              <Image
                src={product.image}
                alt={product.title}
                width={500}
                height={300}
                className="card-img-top"
                style={{ objectFit: "cover", height: "200px" }}
              />
              <div className="card-body p-4">
                <h5
                  className="card-title mb-2 fw-bold"
                  style={{
                    color:
                      product.category === "men"
                        ? "#7ec4cf"
                        : product.category === "women"
                        ? "#b892ff"
                        : product.category === "kids"
                        ? "#ffc107"
                        : "#ff85a2",
                  }}
                >
                  {product.title}
                </h5>
                <p className="card-text">{product.description}</p>
                <ul className="list-unstyled mt-3">{product.features.map((f, i) => (
                    <li key={i} className="d-flex align-items-center mb-1">
                      <i
                        className="bi bi-check-circle-fill me-2"
                        style={{
                          color:
                            product.category === "men"
                              ? "#7ec4cf"
                              : product.category === "women"
                              ? "#b892ff"
                              : product.category === "kids"
                              ? "#ffc107"
                              : "#ff85a2",
                        }}
                      ></i>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card-footer bg-white border-0 px-4 pb-4 d-flex justify-content-between align-items-center">
                <div className="fw-bold fs-5">{product.price}</div>
                <button
                  className="btn"
                  style={{
                    background:
                      product.category === "men"
                        ? "#7ec4cf"
                        : product.category === "women"
                        ? "#b892ff"
                        : product.category === "kids"
                        ? "#ffc107"
                        : "#ff85a2",
                    color: "white",
                    borderRadius: "30px",
                  }}
                >
                  <i className="bi bi-cart-fill me-2"></i>สั่งซื้อ
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contact */}
      <div className="row mt-5">
        <div className="col-12 text-center">
          <div
            className="p-4 rounded-4 shadow-sm"
            style={{ background: "rgba(184, 146, 255, 0.1)" }}
          >
            <h3 className="mb-3" style={{ color: "#b892ff" }}>
              <strong>สอบถามเพิ่มเติม</strong>
            </h3>
            <p className="mb-4">สนใจสินค้าหรืออยากสั่งซื้อแบบโอนเงิน ทักแชทได้เลย!</p>
            <div className="d-flex justify-content-center gap-3">
              <button
                className="btn px-4 py-2"
                style={{
                  background: "#7e89cfff",
                  color: "white",
                  borderRadius: "30px",
                }}
              >
                <i className="bi bi-chat-dots-fill me-2"></i> แชทผ่าน Facebook
              </button>
              <button
                className="btn px-4 py-2"
                style={{
                  background: "#e681efff",
                  color: "white",
                  borderRadius: "30px",
                }}
              >
                <i className="bi bi-whatsapp me-2"></i> ติดต่อผ่าน instagram.
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
