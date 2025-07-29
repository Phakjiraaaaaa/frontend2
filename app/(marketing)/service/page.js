export default function Service() {
  return (
    <>
      <h1 className="text-4xl text-center text-blue-700 font-bold mb-10 underline decoration-blue-300">บริการของเรา</h1>

      <div className="bg-gradient-to-b from-blue-50 to-white py-10">
        <div className="container mx-auto px-4 grid gap-8 grid-cols-1 md:grid-cols-3">
          
          {/* บริการ 1 */}
          <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out">
            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <img src="/images/silders/08.jpg" alt="จัดส่งสินค้า" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
            <h2 className="text-xl font-bold text-blue-800 mb-2">จัดส่งรวดเร็ว</h2>
            <p className="text-gray-600">
              จัดส่งสินค้าทั่วประเทศภายใน 1-3 วันทำการ พร้อมระบบติดตามสถานะการจัดส่ง
            </p>
          </div>

          {/* บริการ 2 */}
          <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <img src="/images/silders/09.png" alt="ซ่อมรองเท้า" style={{ maxWidth: '100%', height: 'auto' }}  />
            </div>
            <h2 className="text-xl font-bold text-green-800 mb-2">บริการซ่อมรองเท้า</h2>
            <p className="text-gray-600">
              ให้บริการซ่อมพื้น เปลี่ยนเชือก เย็บซ่อมรองเท้าโดยช่างมืออาชีพ
            </p>
          </div>

          {/* บริการ 3 */}
          <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out">
            <div className="bg-pink-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <img src="/images/silders/10.png" alt="แนะนำขนาด" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
            <h2 className="text-xl font-bold text-pink-800 mb-2">แนะนำขนาดรองเท้า</h2>
            <p className="text-gray-600">
              มีคู่มือแนะนำขนาดรองเท้าที่แม่นยำ เพื่อให้คุณใส่ได้พอดีทุกคู่  
            </p>
          </div>

        </div>
      </div>
    </>
  );
}