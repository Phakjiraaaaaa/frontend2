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
            ride: "carousel", // 
            wrap: true,
          });
        }
      });
    }
  }, []);

  return (
    <div
      id="carouselExample"
      className="carousel slide"
      data-bs-ride="carousel" 
      style={{
        width: "800px",
        height: "350px",
        margin: "40px auto 0",
        overflow: "hidden",
        borderRadius: "8px",
      }}
    >
      <div className="carousel-inner" style={{ height: "350px" }}>
        {["01.png", "02.jpg", "03.png", "04.jpg", "05.jpg"].map((img, index) => (
          <div
            key={img}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            style={{ height: "350px" }}
          >
            <Image
              priority
              src={`/images/silders/${img}`}
              className="d-block w-100 img-fluid"
              alt={`Slide ${index + 1}`}
              width={800}
              height={350}
              style={{ objectFit: "cover", height: "350px" }}
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
  );
}
