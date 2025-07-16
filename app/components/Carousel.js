"use client";
import { useEffect } from "react";
import Image from "next/image";
import { Carousel as BootstrapCarousel } from "bootstrap";

export default function Carousel() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js").then(() => {
      const carouselElement = document.getElementById("carouselExample");
      if (carouselElement) {
        new BootstrapCarousel(carouselElement, {
          interval: 3000,  // เลื่อนอัตโนมัติทุก 3 วิ
          wrap: true,      // เลื่อนวนซ้ำ
          ride: "carousel" // เริ่มเล่นอัตโนมัติ
        });
      }
    });
  }, []);

  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <Image
            src="/images/silders/01.png"
            className="d-block w-100 img-fluid"
            alt="Slide 1"
            width={1920}
            height={700}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="carousel-item">
          <Image
            src="/images/silders/02.jpg"
            className="d-block w-100 img-fluid"
            alt="Slide 2"
            width={1920}
            height={700}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="carousel-item">
          <Image
            src="/images/silders/03.png"
            className="d-block w-100 img-fluid"
            alt="Slide 3"
            width={1920}
            height={700}
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
