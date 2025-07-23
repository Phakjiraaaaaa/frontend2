"use client";
import Carousel from "./components/Carousel";
import Cards from "./components/cards";

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: 'url("/images/silders/11.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh', 
        width: '100%',
      }}
    >
      <Carousel />
      <Cards />
    </div>
  );
}
