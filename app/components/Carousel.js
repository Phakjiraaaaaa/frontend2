"use client";
import { useEffect } from "react";
import Image from "next/image";

export default function Carousel() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("bootstrap/dist/js/bootstrap.bundle.min.js").then(() => {
        const carouselElement = document.getElementById("carouselExample");
        if (carouselElement) {
          new window.bootstrap.Carousel(carouselElement, {
            interval: 3000,
            wrap: true,
            ride: "carousel",
          });
        }
      });
    }
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
