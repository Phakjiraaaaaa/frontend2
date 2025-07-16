import Carousel from "./components/Carousel";
import Cards from "./components/cards";

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: 'url("/images/silders/11.png")', // ใส่ URL รูปภาพพื้นหลัง
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh', // ให้เต็มหน้าจอแนวตั้ง
        width: '100%',
      }}
    >
      <Carousel />
      <Cards />
    </div>
  );
}
