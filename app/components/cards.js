"use client";

import { useEffect } from "react";

export default function CardsCarousel() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

 
  const cards = [
    { title: "Nike Dunk Low Panda", 
      price: "฿3,700", 
      img: "/images/silders/nike1.png" },

    { title: "Nike SB Dunk Low Pro", 
      price: "฿5,200", 
      img: "/images/silders/nike2.png" },

    { title: "Nike Air Force 1", 
      price: "฿4,700", 
      img: "/images/silders/nike3.png" },

    { title: "Nike Zoom Freak 4", 
      price: "฿4,900", 
      img: "/images/silders/nike4.png" },

    { title: "Nike Air Max 270", 
      price: "฿6,000", 
      img: "/images/silders/nike5.png" },

    { title: "Nike React Infinity", 
      price: "฿5,500", 
      img: "/images/silders/nike6.png" },

    { title: "Nike Air VaporMax", 
      price: "฿6,200", 
      img: "/images/silders/nike7.png" },

    { title: "Nike Blazer Mid", 
      price: "฿4,100", 
      img: "/images/silders/nike8.png" },

    { title: "Nike Free RN", 
      price: "฿3,800", 
      img: "/images/silders/nike9.png" },
  ];

  const chunkSize = 3;
  const cardGroups = [];
  for (let i = 0; i < cards.length; i += chunkSize) {
    cardGroups.push(cards.slice(i, i + chunkSize));
  }

  return (
    <div className="container my-5 cards-container">
      <link
        href="https://fonts.googleapis.com/css2?family=Anton&display=swap"
        rel="stylesheet"
      />
      <h2 className="text-center mb-5 animate__animated animate__fadeInDown gradient-text hover-pop custom-font">
        Nike
      </h2>

      <div
        id="cardsCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div className="carousel-inner">
          {cardGroups.map((group, idx) => (
            <div
              key={idx}
              className={`carousel-item ${idx === 0 ? "active" : ""}`}
            >
              <div className="row justify-content-center">
                {group.map((item, index) => (
                  <div
                    key={index}
                    className="col-12 col-sm-6 col-md-4 mb-4 d-flex justify-content-center"
                  >
                    <div
                      className="card shadow-lg hover-scale fixed-card-size"
                      style={{ transition: "transform 0.3s ease" }}
                    >
                      <img
                        src={item.img}
                        className="card-img-top fixed-img-size"
                        alt={item.title}
                      />
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
            </div>
          ))}
        </div>

        {/* ปุ่มควบคุม */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#cardsCarousel"
          data-bs-slide="prev"
          style={{ width: "5%", opacity: 0.7 }}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#cardsCarousel"
          data-bs-slide="next"
          style={{ width: "5%", opacity: 0.7 }}
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>

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

        .fixed-card-size {
          width: 320px;
          height: 400px;
          display: flex;
          flex-direction: column;
        }

        .fixed-img-size {
          width: 100%;
          height: 220px;
          object-fit: cover;
        }

        @media (max-width: 576px) {
          .custom-font {
            font-size: 2.5rem;
          }
          .fixed-card-size {
            width: 100%;
            height: auto;
          }
          .fixed-img-size {
            height: 180px;
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
