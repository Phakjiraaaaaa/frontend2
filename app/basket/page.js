"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Swal from "sweetalert2";

export default function BasketPage() {
  const [cartItems, setCartItems] = useState([]);

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

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const paymentStatus = urlParams.get("payment");
    const itemId = urlParams.get("itemId");

    if (paymentStatus === "success" && itemId) {
      const item = cartItems.find((i) => i.id.toString() === itemId);
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

        const newCart = cartItems.filter((i) => i.id !== item.id);
        setCartItems(newCart);
        localStorage.setItem("cart", JSON.stringify(newCart));
        window.dispatchEvent(new Event("storage"));
      }
    }
  }, [cartItems]);

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

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  const handleCheckout = (item) => {
    window.location.href = `https://www.kasikornbank.com/th/kplus/start/?itemId=${item.id}`;
  };

  return (
    <div className="container my-5">
      <h1 className="display-4 fw-bold mb-3" style={{ color: "#ac40ffff" }}>
        ตะกร้าสินค้าของคุณ
      </h1>

      <h3 className="mt-4">
        <strong>ตะกร้า: {cartItems.length} รายการ</strong>
      </h3>

      {cartItems.length === 0 ? (
        <p className="text-muted">ยังไม่มีสินค้าในตะกร้า</p>
      ) : (
        <div className="list-group mb-4">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center p-3 mb-2 shadow-sm rounded"
              style={{ backgroundColor: "#f9eaffff" }}
            >
              <div className="d-flex align-items-center gap-2">
                <img
                  src={item.image}
                  alt={item.name}
                  width={80}
                  height={50}
                  style={{ objectFit: "cover", borderRadius: "8px" }}
                />
                <div>
                  <h4 className="mb-1" style={{ color: "#ff85a2" }}>
                    {item.name}
                  </h4>
                  <small>ราคา: {item.price} บาท</small>
                </div>
              </div>
              <div className="d-flex gap-2">
                <button
                  className="btn btn-sm btn-success"
                  onClick={() => handleCheckout(item)}
                >
                  ชำระเงิน
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleRemove(index)}
                >
                  ลบ
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <h4 className="mb-4">ราคารวม: {totalPrice} บาท</h4>

      <div className="d-flex gap-2">
        <Link href="/service">
          <button className="btn btn-primary">กลับไปเลือกสินค้า</button>
        </Link>
      </div>
    </div>
  );
}
