"use client";

import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import Swal from "sweetalert2";

export default function BasketPage() {
  const [cartItems, setCartItems] = useState([]);

  // โหลดตะกร้าเริ่มต้นจาก localStorage
  useEffect(() => {
    const updateCart = () => {
      const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
      setCartItems(storedCart);
    };

    updateCart();
    window.addEventListener("cartUpdated", updateCart);

    return () => {
      window.removeEventListener("cartUpdated", updateCart);
    };
  }, []);

  // ตรวจสอบสถานะการชำระเงิน
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const paymentStatus = urlParams.get("payment");
    const itemId = urlParams.get("itemId");

    if (paymentStatus === "success" && itemId) {
      const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
      const item = storedCart.find((i) => i.id.toString() === itemId);

      if (item) {
        Swal.fire({
          icon: "success",
          title: "ชำระเงินสำเร็จ!",
          text: `คุณได้ชำระเงินสินค้า ${item.name} เรียบร้อยแล้ว`,
          showConfirmButton: false,
          timer: 1500,
          toast: true,
          position: "top-end",
        });

        const newCart = storedCart.filter((i) => i.id !== item.id);
        setCartItems(newCart);
        localStorage.setItem("cart", JSON.stringify(newCart));
        window.dispatchEvent(new Event("storage"));
      }
    }
  }, []);

  // คำนวณราคารวม โดยแปลง price และ quantity เป็น number
  const totalPrice = useMemo(() => {
    return cartItems.reduce((sum, item) => {
      const price = Number(item.price) || 0;
      const quantity = Number(item.quantity) || 1;
      return sum + price * quantity;
    }, 0);
  }, [cartItems]);

  // ลบสินค้า
  const handleRemove = async (index) => {
    const result = await Swal.fire({
      title: "คุณแน่ใจไหม?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "ใช่!",
      cancelButtonText: "ยกเลิก",
    });

    if (result.isConfirmed) {
      const newCart = [...cartItems];
      newCart.splice(index, 1);
      setCartItems(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
      window.dispatchEvent(new Event("storage"));

      Swal.fire({
        icon: "success",
        title: "ลบสำเร็จ!",
        text: "สินค้าของคุณถูกลบแล้ว",
        showConfirmButton: false,
        timer: 1500,
        toast: true,
        position: "top-end",
      });
    }
  };

  // ชำระเงิน
  const handleCheckout = (item) => {
    window.location.href = `https://www.kasikornbank.com/th/kplus/start/?itemId=${item.id}`;
  };

  return (
    <div className="container my-5">
      <h1 className="display-4 fw-bold mb-3" style={{ color: "#8271ffff" }}>
        ตะกร้าสินค้าของคุณ
      </h1>

      <h3 className="mt-4 mb-4">
        <strong>ตะกร้า: {cartItems.length} รายการ</strong>
      </h3>

      <div className="d-flex justify-content mt-4 mb-5">
        <Link href="/service">
          <button
            className="btn btn-lg px-4"
            style={{ backgroundColor: "#b0a5ffff", color: "#fff" }}
          >
            กลับไปเลือกสินค้า
          </button>
        </Link>
      </div>

      {cartItems.length === 0 ? (
        <p className="text-muted text-center">ยังไม่มีสินค้าในตะกร้า</p>
      ) : (
        <>
          <div className="list-group mb-4">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center p-3 mb-3 shadow rounded-4"
                style={{ backgroundColor: "#edeafeff" }}
              >
                <div className="d-flex align-items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    width={90}
                    height={60}
                    style={{ objectFit: "cover", borderRadius: "12px" }}
                  />
                  <div>
                    <h5 className="mb-1" style={{ color: "#5f5d5dff" }}>
                      {item.name}
                    </h5>
                    <p className="mb-0 fw-bold" style={{ color: "#555" }}>
                      ราคา: {item.price} บาท x {item.quantity || 1}
                    </p>
                  </div>
                </div>
                <div className="d-flex gap-2">
                  <button
                    className="btn btn-success btn-sm px-3"
                    onClick={() => handleCheckout(item)}
                  >
                    ชำระเงิน
                  </button>
                  <button
                    className="btn btn-danger btn-sm px-3"
                    onClick={() => handleRemove(index)}
                  >
                    ลบ
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
