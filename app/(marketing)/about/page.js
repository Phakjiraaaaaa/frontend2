"use client";
import Image from "next/image";

export default function About() {
  return (
    <>
    
      <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
        
        <h1 className="text-4xl text-red-700 mb-6">About</h1>

        <div className="flex justify-center items-center mb-6">
          <Image
            src="/images/silders/07.png"
            alt="Slide 1"
            width={800}
            height={400}
            className="img-fluid shadow-none rounded-none"
            style={{ objectFit: "cover" }}
          />
        </div>

        <section className="max-w-3xl text-gray-800">
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
      </div>
    </>
  );
}
