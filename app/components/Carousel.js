"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function Carousel() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("bootstrap/dist/js/bootstrap.bundle.min.js").then((module) => {
        const carouselElement = document.getElementById("carouselExample");
        const Carousel = module.Carousel;
        if (carouselElement && Carousel) {
          new Carousel(carouselElement, {
            interval: 3000,
            ride: "carousel",
            wrap: true,
          });
        }
      });
    }
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "800px",
        aspectRatio: "16 / 7",
        margin: "40px auto 0",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
      }}
    >
      {/* พื้นหลังขยับอยู่ด้านหลัง */}
      <div
        className="absolute top-0 left-0 w-full h-full animate-slowMove"
        style={{
          backgroundImage: "url('/images/silders/BG.jpg')", // เปลี่ยนเป็น BG.mp4 ไม่ได้ ต้องใช้ video tag ถ้าต้องการวิดีโอ
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(8px) brightness(0.7)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* ตัว carousel */}
      <div
        id="carouselExample"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{ position: "relative", zIndex: 10, height: "100%" }}
      >
        <div className="carousel-inner" style={{ height: "100%" }}>
          {["01.png", "02.jpg", "03.png", "04.jpg", "05.jpg"].map((img, index) => (
            <div
              key={img}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              style={{ height: "100%" }}
            >
              <Image
                priority
                src={`/images/silders/${img}`}
                className="d-block w-100 img-fluid"
                alt={`Slide ${index + 1}`}
                width={800}
                height={350}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
          style={{ width: "5%", opacity: 0.7 }}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
          style={{ width: "5%", opacity: 0.7 }}
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <style jsx>{`
        @keyframes slowMove {
          0% {
            transform: scale(1) translateX(0);
          }
          50% {
            transform: scale(1.1) translateX(-10px);
          }
          100% {
            transform: scale(1) translateX(0);
          }
        }
        .animate-slowMove {
          animation: slowMove 10s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
