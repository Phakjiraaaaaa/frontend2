"use client";

import Link from "next/link";
import { Inter } from 'next/font/google';

export default function Footer() {
  return (
    <div className="container">
      <footer className="py-5">
        <div className="row">
          <div className="col-6 col-md-2 mb-3">
            <h5>แหล่งข้อมูล</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link
                  href="/"
                  className="nav-link p-0 text-body-secondary hover:text-primary"
                >
                  หน้าร้าน
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  href="/service"
                  className="nav-link p-0 text-body-secondary hover:text-primary"
                >
                  ผู้ชาย
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  href="/service"
                  className="nav-link p-0 text-body-secondary hover:text-primary"
                >
                  ผู้หญิง
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  href="/service"
                  className="nav-link p-0 text-body-secondary hover:text-primary"
                >
                  เด็ก
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5>ช่วยเหลือ</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link
                  href="/admin/users"
                  className="nav-link p-0 text-body-secondary hover:text-primary"
                >
                  Admin
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  href="/contact"
                  className="nav-link p-0 text-body-secondary hover:text-primary"
                >
                  ติดต่อเรา
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-5 offset-md-1 mb-3">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="email"
                  className="form-control"
                  placeholder="Email address"
                />
                <button className="btn btn-primary hover:opacity-80" type="button">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* รูปรองเท้า */}
        <div className="shoe-gallery text-center">
          <img src="/images/silders/footer.png" alt="รองเท้า" className="shoe-img hover:scale-110 transition-transform duration-300" />
          <img src="/images/silders/footer1.png" alt="รองเท้า" className="shoe-img hover:scale-110 transition-transform duration-300" />
          <img src="/images/silders/footer2.png" alt="รองเท้า" className="shoe-img hover:scale-110 transition-transform duration-300" />
          <img src="/images/silders/footer3.png" alt="รองเท้า" className="shoe-img hover:scale-110 transition-transform duration-300" />
          <img src="/images/silders/footer4.png" alt="รองเท้า" className="shoe-img hover:scale-110 transition-transform duration-300" />
          <img src="/images/silders/footer5.png" alt="รองเท้า" className="shoe-img hover:scale-110 transition-transform duration-300" />
          <img src="/images/silders/footer6.png" alt="รองเท้า" className="shoe-img hover:scale-110 transition-transform duration-300" />
          <img src="/images/silders/footer7.png" alt="รองเท้า" className="shoe-img hover:scale-110 transition-transform duration-300" />
          <img src="/images/silders/footer8.png" alt="รองเท้า" className="shoe-img hover:scale-110 transition-transform duration-300" />
          <img src="/images/silders/footer9.png" alt="รองเท้า" className="shoe-img hover:scale-110 transition-transform duration-300" />
        </div>

        {/* ลิขสิทธิ์ + Social Media */}
        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center py-4 my-4 border-top">
          <div className="d-flex align-items-center mb-3 mb-sm-0">
            <p className="mb-0">© 2025 Sneakerss Brand. All rights reserved.</p>
          </div>

          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <a
                className="link-body-emphasis hover:text-pink-500 transition-colors duration-300"
                href="https://www.instagram.com/_phakjiraaaaaa?igsh=MTAxczZwd2drZjQ4bA=="
                target="_blank"
                aria-label="Instagram"
              >
                <i className="bi bi-instagram"></i>
              </a>
            </li>
            <li className="ms-3">
              <a
                className="link-body-emphasis hover:text-blue-600 transition-colors duration-300"
                href="ttps://www.facebook.com/share/1AnghNXN5p/"
                target="_blank"
                aria-label="Facebook"
              >
                <i className="bi bi-facebook"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
