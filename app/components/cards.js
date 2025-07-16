"use client";

import { useEffect } from "react";

export default function Cards() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <div className="container my-5 cards-container">
      {/* โหลดฟอนต์ Anton จาก Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Anton&display=swap"
        rel="stylesheet"
      />

      <h2 className="text-center mb-5 animate__animated animate__fadeInDown gradient-text hover-pop custom-font">
        Nike
      </h2>

      <div className="row justify-content-center">
        {[
          {
            title: "Nike Dunk Low Panda",
            price: "฿3,700",
            img: "/images/silders/04.png",
          },
          {
            title: "Nike SB Dunk Low Pro",
            price: "฿5,200",
            img: "/images/silders/05.png",
          },
          {
            title: "Nike Air Force 1",
            price: "฿4,700",
            img: "/images/silders/06.png",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="col-12 col-sm-6 col-md-4 mb-4 d-flex justify-content-center animate__animated animate__zoomIn"
          >
            <div
              className="card shadow-lg hover-scale"
              style={{ transition: "transform 0.3s ease" }}
            >
              <img src={item.img} className="card-img-top" alt={item.title} />
              <div className="card-body text-center">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.price}</p>
                <a href="#" className="btn btn-primary btn-hover">
                  รายละเอียด
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .cards-container {
          background-color: #f0f0f0;
          padding: 2rem;
          border-radius: 12px;
        }

        .hover-scale:hover {
          transform: scale(1.05);
        }

        .btn-hover:hover {
          background-color: #000;
          border-color: #000;
        }

        .gradient-text {
          background: linear-gradient(90deg, #111 0%, #999 50%, #111 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hover-pop {
          transition: transform 0.3s ease;
        }

        .hover-pop:hover {
          transform: scale(1.1);
        }

        .custom-font {
          font-family: "Anton", sans-serif;
          font-size: 4rem;
          font-weight: 900;
          text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);
          letter-spacing: 2px;
        }

        .card {
          width: 100%;
          max-width: 320px;
        }

        .card-img-top {
          width: 100%;
          height: 220px;
          object-fit: contain;
        }

        @media (max-width: 576px) {
          .card-img-top {
            height: 180px;
          }
          .custom-font {
            font-size: 2.5rem;
          }
        }
      `}</style>

      {/* Load Animate.css */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />
    </div>
  );
}
