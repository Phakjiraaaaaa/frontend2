"use client";
import Image from "next/image";

export default function About() {
  return (
    <>
      <h1 className="text-4xl text-center text-red-700 mb-6">About</h1>

        <div className="carousel-inner">
              <div className="carousel-item active">
                <Image
                  src="/images/silders/07.png"
                  className="d-block w-100 img-fluid"
                  alt="Slide 1"
                  width={1920}
                  height={700}
                  style={{ objectFit: "cover" }}
                />
        </div>
      </div>

      <section className="max-w-3xl mx-auto px-4 text-gray-800">
        <p className="mb-4">
          เราเป็นร้านรองเท้าที่เน้นคุณภาพและดีไซน์ทันสมัย เพื่อให้คุณได้สวมใส่รองเท้าที่ทั้งสวยงามและใส่สบายในทุกกิจกรรม
        </p>
        <p className="mb-4">
          รองเท้าของเราผลิตจากวัสดุคุณภาพสูง ผ่านกระบวนการผลิตที่พิถีพิถัน เพื่อความทนทานและรองรับการใช้งานในชีวิตประจำวัน
        </p>
        <p>
          ไม่ว่าคุณจะชอบสไตล์สปอร์ต คลาสสิก หรือแฟชั่น เรามีรองเท้าหลากหลายแบบให้คุณเลือกสรรตามใจชอบ
        </p>
      </section>
    </>
  );
}
