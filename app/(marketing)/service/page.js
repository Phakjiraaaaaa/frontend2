"use client";

import { useState } from "react";
import Image from "next/image";
import "bootstrap-icons/font/bootstrap-icons.css";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { Sriracha } from "next/font/google";

const sriracha = Sriracha({ subsets: ["latin"], weight: ["400"] });

export default function ShoeStore() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [cart, setCart] = useState([]);
  const shoeProducts = [
    {
      id: 1,
      title: "รองเท้าผ้าใบผู้ชาย รุ่น Nike\nDunk Low Retro Premium",
      description: "ดีไซน์เรียบหรู ใส่สบาย ใส่ได้ทั้งวัน ",
      image: "/images/silders/ช1.png",
      price: "฿ 4,700 ",
      category: "men",
      features: ["ระบายอากาศได้ดี", "พื้นยางกันลื่น", "มีไซส์ 39-45"],
    },
    {
      id: 2,
      title: "รองเท้าผ้าใบผู้หญิง รุ่น Nike\nAir Force 1 Low",
      description: "น้ำหนักเบา เข้าได้ทุกสไตล์ ใส่เดินเล่นหรือเที่ยวก็เหมาะ",
      image: "/images/silders/ญ1.png",
      price: "฿ 5,200",
      category: "women",
      features: ["คุมโทน", "สีขาวหวาน", "มีไซส์ 35-40"],
    },
    {
      id: 3,
      title: "รองเท้าเด็ก รุ่น Nike\nDunk Low",
      description: "ปลอดภัย พื้นนุ่มมาก ใส่แล้วเดินง่ายไม่ลื่น",
      image: "/images/silders/ด1.png",
      price: "฿ 1,700",
      category: "kids",
      features: ["กันลื่นดีเยี่ยม", "น้ำหนักเบามาก", "สำหรับเด็กหัดเดิน"],
    },
    {
      id: 4,
      title: "รองเท้าผู้ชาย รุ่น New Balance\n574 core men's",
      description: "แตะสไตล์มินิมอล ใส่สบาย ใช้งานทนทาน",
      image: "/images/silders/ช2.png",
      price: "฿ 3,500",
      category: "men",
      features: ["สีดำ", "ไม่ลื่นแม้เปียก", "พื้นนุ่ม"],
    },
    {
      id: 5,
      title: "รองเท้าผู้หญิง รุ่น New Balance 530",
      description: "สายคาดไขว้ ใส่ออกงานได้ ใส่สบายทุกโอกาส",
      image: "/images/silders/ญ2.png",
      price: "฿ 3,500",
      category: "women",
      features: ["สายชอบความนิ่ม", "มีหลายสีให้เลือก", "ใส่สบาย"],
    },
    {
      id: 6,
      title: "รองเท้าเด็ก รุ่น  New Balance\n574 HOOK & LOOP",
      description: "ปลอดภัย พื้นนุ่ม เหมาะกับเด็ก",
      image: "/images/silders/ด2.png",
      price: "฿ 1,500",
      category: "kids",
      features: ["น้ำหนักเบา", "ลายน่ารัก", "ไซส์ 0-10"],
    },
    {
      id: 7,
      title: "รองเท้าผู้ชาย รุ่น Converse\nChuck 70",
      description: "สไตล์วินเทจ ใส่สบาย ใช้งานทนทาน",
      image: "/images/silders/ช3.png",
      price: "฿ 3,090",
      category: "men",
      features: ["เท่ดีไซน์เท่", "ไม่ลื่นแม้เปียก", "ใส่ทำงานได้"],
    },
    {
      id: 8,
      title: "รองเท้าผู้หญิง รุ่น Converse\nChuck Taylor All Star Celestial",
      description: "สไตล์ทันสมัย สีสวยหวาน เหมาะกับทุกโอกาส",
      image: "/images/silders/ญ3.png",
      price: "฿ 2,600",
      category: "women",
      features: ["สายมินิมอล", "วัสดุคุณภาพ", "ระบายอากาศดี"],
    },
    {
      id: 9,
      title: "รองเท้าเด็ก รุ่น Converse\nChuck Taylor All Star",
      description: "ปลอดภัย พื้นนุ่มมาก ใส่แล้วเดินง่ายไม่ลื่น",
      image: "/images/silders/ด3.png",
      price: "฿ 1,500",
      category: "kids",
      features: ["น้ำหนักเบามาก", "มินิมอล", "ไซส์เด็ก"],
    },
    {
      id: 10,
      title: "รองเท้าผู้ชาย รุ่น Adidas\nSuperstar II Shoes",
      description: "แตะสไตล์มินิมอล ใส่สบาย สีสวย",
      image: "/images/silders/ช4.png",
      price: "฿4,000",
      category: "men",
      features: ["มีหลากหลายสี", "ไม่ลื่นแม้เปียก", "พื้นนุ่ม"],
    },
    {
      id: 11,
      title: "รองเท้าผู้หญิง รุ่น Addas\nSamba OG Shoes",
      description: "ดีไซน์สวยงาม น้ำหนักเบา ใส่สบายตลอดวัน",
      image: "/images/silders/ญ4.png",
      price: "฿ 3,800",
      category: "women",
      features: ["ผู้ชายก็ใส่ได้", "มีหลายสี", "ไซส์ 36-41"],
    },
    {
      id: 12,
      title:
        "รองเท้าเด็ก รุ่น Addas\nGazelle Comfort Closure Elastic Laces Shoes Kids",
      description:
        "นุ่มสบาย น้ำหนักเบา เดิน-วิ่งคล่องตัว เหมาะสำหรับเด็กทุกวัย",
      image: "/images/silders/ด4.png",
      price: "฿ 1,800",
      category: "kids",
      features: ["ไซส์น่ารัก", "น้ำหนักเบามาก", "เด็กใส่สบายทั้งวัน"],
    },
    {
      id: 13,
      title: "รองเท้าผู้ชาย รุ่น VANS\nKNU SKOOL-Black  ",
      description: "พร้อมลุยทุกกิจกรรม ด้วยความสบายและน้ำหนักเบา",
      image: "/images/silders/ช5.png",
      price: "฿ 3,200",
      category: "men",
      features: ["เหมาะกับทุกไลฟ์สไตล์", "ทนทาน", "ใช้งานได้นาน"],
    },
    {
      id: 14,
      title: "รองเท้าผู้หญิง รุ่น VANS\nOLD SKOOL - MARSHMALLOW/GREEN",
      description: "เติมเต็มลุคเท่ ๆ ให้คุณได้ทุกวัน",
      image: "/images/silders/ญ5.png",
      price: "฿ 3,200",
      category: "women",
      features: ["ใส่สบายทุกก้าว", "สบายตลอดวัน", "ไม่เจ็บเท้า"],
    },
    {
      id: 15,
      title:
        "รองเท้าเด็ก รุ่น VANS\nERA ELASTIC LACE ( 1_4 YEARS ) - RADICALLY HAPPY TRUE WHITE",
      description: "ใส่สบาย น้ำหนักเบา พร้อมลุยทุกกิจกรรมของเด็ก ๆ",
      image: "/images/silders/ด5.png",
      price: "฿ 560",
      category: "kids",
      features: ["ไม่อับชื้น", "เบาสบาย", "เด็กใส่สบายทั้งวัน"],
    },
    {
      id: 16,
      title: "รองเท้าผู้ชาย รุ่น Louis Vuitton\nLV Trainer ",
      description:
        "น้ำหนักเบา ช่วยให้เคลื่อนไหวได้คล่องตัว ลุคเรียบเท่แต่มีสไตล์",
      image: "/images/silders/ช6.png",
      price: "฿ 48,700",
      category: "men",
      features: ["ดีไซน์โดดเด่น", "ทนทาน", "มีไซส์ 36-41 ครอบคลุมทุกขนาดเท้า"],
    },
    {
      id: 17,
      title: "รองเท้าผู้หญิง รุ่น Louis Vuitton\nLV Trainer",
      description: "เหมาะสำหรับผู้หญิงที่รักแฟชั่น แต่ยังคงความสบาย",
      image: "/images/silders/ญ6.png",
      price: "฿ 47,400",
      category: "women",
      features: ["มีหลายสีให้เลือก", "ตอบโจทย์ทุกสไตล์"],
    },
    {
      id: 18,
      title: "รองเท้าผู้ชาย รุ่น PUMA\nRS Surge Sneakers Unisex ",
      description: "พื้นนุ่ม เดิน วิ่ง หรือเล่นกีฬาเบา ๆ ก็สบาย",
      image: "/images/silders/ช7.png",
      price: "฿ 4,500",
      category: "men",
      features: ["เหมาะกับทุกไลฟ์สไตล์", "เคลื่อนไหวได้คล่องตัว", "คงความเท่"],
    },
    {
      id: 19,
      title: "รองเท้าผู้หญิง รุ่น PUMA\nSpeedcat OG",
      description: "ดีไซน์คลาสสิก ใส่แล้วดูเก๋ทุกมุม",
      image: "/images/silders/ญ7.png",
      price: "฿ 3,800",
      category: "women",
      features: [
        "สีสันสดใส",
        "ดีไซน์เรียบหรูแต่โดดเด่น",
        "น้ำหนักเบา ใส่สบายตลอดวัน",
      ],
    },
    {
      id: 20,
      title: "รองเท้าเด็ก รุ่น PUMA\nCourtflex V3",
      description: "เด็ก ๆ ใส่แล้วดูชิค มีสไตล์ ใส่ง่ายและสบาย ไม่กัดเท้า",
      image: "/images/silders/ด7.png",
      price: "฿ 1,300",
      category: "kids",
      features: ["ครอบคลุมเด็กทุกวัย", "ดีไซน์สวย"],
    },
  ];

  const categories = [
    { id: "all", name: "ทั้งหมด", icon: "bi-grid-fill", color: "#ff85a2" },
    { id: "men", name: "ผู้ชาย", icon: "bi-person-fill", color: "#7ec4cf" },
    {
      id: "women",
      name: "ผู้หญิง",
      icon: "bi-person-hearts",
      color: "#b892ff",
    },
    { id: "kids", name: "เด็ก", icon: "bi-bicycle", color: "#ffc107" },
  ];

  const filteredProducts =
    activeCategory === "all"
      ? shoeProducts
      : shoeProducts.filter((p) => p.category === activeCategory);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);

    const currentCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const updatedCart = [...currentCart, product];
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    window.dispatchEvent(new Event("cartUpdated"));

    Swal.fire({
      title: '<span style="color:#ff85a2">สำเร็จ!</span>',
      html: `<span style="color:#000000">เพิ่ม "${product.title}" เพิ่มลงตะกร้าแล้ว</span>`,
      icon: "success",
      showConfirmButton: false,
      timer: 1500,
      background: "#fff0f5",
      iconColor: "#91ff85ff",
      toast: true,
      position: "top-end",
    });
  };

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
                  activeCategory === category.id
                    ? category.color
                    : "transparent",
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
      {/* Promotion */}
      <div className="row mt-5">
        {/* Promotion 1 */}
        <div className="col-12 col-md-6 mb-4">
          <div
            className="p-4 rounded-4 shadow-sm text-center"
            style={{ background: "rgba(255, 133, 162, 0.1)" }}
          >
            <h3 className="mb-3" style={{ color: "rgba(255, 133, 162, 1)" }}>
              <strong>โปรโมชันพิเศษ!</strong>
            </h3>
            <p className="mb-4">
              ลดทันที 15% เมื่อสั่งซื้อครบ 2,500 บาท วันนี้ -
              สิ้นเดือนนี้เท่านั้น
            </p>
          </div>
        </div>

        {/* Promotion 2 */}
        <div className="col-12 col-md-6 mb-4">
          <div
            className="p-4 rounded-4 shadow-sm text-center"
            style={{ background: "rgba(111, 190, 251, 0.1)" }}
          >
            <h3 className="mb-3" style={{ color: "rgba(111, 190, 251, 1)" }}>
              <strong>โปรโมชันสมาชิก!</strong>
            </h3>
            <p className="mb-4">
              รับคูปอง 200 บาท เมื่อซื้อสินค้าครบ 3,000 บาท เฉพาะสมาชิกเท่านั้น
            </p>
          </div>
        </div>
      </div>
      {/* Product List */}
      <div className="row">
        {filteredProducts.map((product) => (
          <div key={product.id} className="col-md-6 col-lg-4 mb-4">
            <div className="card border-0 shadow-sm h-100 rounded-4 overflow-hidden">
              <div
                className="position-relative"
                style={{ width: "100%", aspectRatio: "16/9" }}
              >
                {product?.image ? (
                  <Image
                    src={product.image}
                    alt={product.title || "Product image"}
                    fill
                    className="card-img-top"
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                ) : (
                  <div className="d-flex align-items-center justify-content-center bg-light w-100 h-100">
                    <span className="text-muted">No Image</span>
                  </div>
                )}
              </div>

              <div className="card-body p-4">
                <h5
                  className="card-title mb-2 fw-bold"
                  style={{
                    whiteSpace: "pre-line",
                    color:
                      product.category === "men"
                        ? "#7ec4cf"
                        : product.category === "women"
                        ? "#b892ff"
                        : "#ffc107",
                  }}
                >
                  {product.title}
                </h5>
                <p className="card-text">{product.description}</p>
                <ul className="list-unstyled mt-3">
                  {product.features.map((f, i) => (
                    <li key={i} className="d-flex align-items-center mb-1">
                      <i
                        className="bi bi-check-circle-fill me-2"
                        style={{
                          color:
                            product.category === "men"
                              ? "#7ec4cf"
                              : product.category === "women"
                              ? "#b892ff"
                              : "#ffc107",
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
                        : "#ffc107",
                    color: "white",
                    borderRadius: "30px",
                  }}
                  onClick={() => addToCart(product)}
                >
                  <i className="bi bi-cart-fill me-2"></i>เพิ่มลงตะกร้า
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="row mt-5">
        <div className="col-12 text-center">
          <div
            className="p-4 rounded-4 shadow-sm"
            style={{ background: "rgba(184, 146, 255, 0.1)" }}
          >
            <h3 className="mb-3" style={{ color: "#b892ff" }}>
              <strong>สอบถามเพิ่มเติม</strong>
            </h3>
            <p className="mb-4">
              สนใจสินค้าหรืออยากสั่งซื้อแบบโอนเงิน ทักแชทได้เลย!
            </p>

            <div className="d-flex justify-content-center gap-3 flex-wrap">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/1AnghNXN5p/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn px-4 py-2"
                style={{
                  background: "#1877f2",
                  color: "white",
                  borderRadius: "30px",
                }}
              >
                <i className="bi bi-facebook me-2"></i> แชทผ่าน Facebook
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/_phakjiraaaaaa?igsh=MTAxczZwd2drZjQ4bA=="
                target="_blank"
                rel="noopener noreferrer"
                className="btn px-4 py-2"
                style={{
                  background: "#e4405f",
                  color: "white",
                  borderRadius: "30px",
                }}
              >
                <i className="bi bi-instagram me-2"></i> ติดต่อผ่าน Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
