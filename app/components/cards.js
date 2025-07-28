"use client";

import { useEffect } from "react";

export default function CardsCarousel() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const cards = [
    { title: "Nike Dunk Low Panda", price: "฿3,700", img: "/images/silders/nike1.png" },
    { title: "Nike SB Dunk Low Pro", price: "฿5,200", img: "/images/silders/nike2.png" },
    { title: "Nike Air Force 1", price: "฿4,700", img: "/images/silders/nike3.png" },
    { title: "New Balance 530", price: "฿4,300", img: "/images/silders/NB4.png" },
    { title: "New Balance 2002", price: "฿3,300", img: "/images/silders/NB5.png" },
    { title: "New Balance BB550", price: "฿3,000", img: "/images/silders/NB6.png" },
    { title: "Adida Samba OG Shoes", price: "฿3,800", img: "/images/silders/A7.png" },
    { title: "Adidas Campus 00s Shoes", price: "฿3,800", img: "/images/silders/A8.png" },
    { title: "Adidas Superstar II Shoes", price: "฿4,000", img: "/images/silders/A9.png" },
  ];

  const chunkSize = 3;
  const cardGroups = [];
  for (let i = 0; i < cards.length; i += chunkSize) {
    cardGroups.push(cards.slice(i, i + chunkSize));
  }

  return (
    <div className="container my-5 cards-container">
      <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet" />
      <h2 className="text-center mb-5 animate__animated animate__fadeInDown gradient-text hover-pop custom-font">
        Sneakerss
      </h2>

      <div
        id="cardsCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div className="carousel-inner">
          {cardGroups.map((group, idx) => (
            <div key={idx} className={`carousel-item ${idx === 0 ? "active" : ""}`}>
              <div className="row justify-content-center">
                {group.map((item, index) => (
                  <div
                    key={index}
                    className="col-12 col-sm-6 col-md-4 mb-4 d-flex justify-content-center"
                  >
                    <div className="card shadow-lg hover-scale fixed-card-size" style={{ transition: "transform 0.3s ease" }}>
                      <div className="image-wrapper">
                        <img
                          src={item.img}
                          className={`fixed-img-size ${
                            ["New Balance 530", "New Balance 2002", "New Balance BB550"].includes(item.title)
                              ? "fixed-img-nb"
                              : ""
                          }`}
                          alt={item.title}
                        />
                      </div>
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
        <button className="carousel-control-prev" type="button" data-bs-target="#cardsCarousel" data-bs-slide="prev" style={{ width: "5%", opacity: 0.7 }}>
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#cardsCarousel" data-bs-slide="next" style={{ width: "5%", opacity: 0.7 }}>
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/*  CSS */}
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
          width: 280px;
          height: 360px;
          display: flex;
          flex-direction: column;
        }

        .image-wrapper {
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          border-radius: 8px;
        }

        .fixed-img-size {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
          display: block;
        }

       .fixed-img-nb {
         object-fit: contain !important; 
         object-position: center center !important; 
         position: relative;
         top: -5px;                    
         max-height: 90%;                  
         background-color: #fff;  
         }   

        @media (max-width: 576px) {
          .custom-font {
            font-size: 2.5rem;
          }

          .fixed-card-size {
            width: 100%;
            height: auto;
          }

          .image-wrapper {
            aspect-ratio: 4 / 3;
          }
        }
      `}</style>

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
    </div>
  );
}
