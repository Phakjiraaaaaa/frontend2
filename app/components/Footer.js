export default function Footer() {
  return (
    <div className="container">
      <footer className="py-5">

        {/* 🔽 โลโก้ส่วนบนของ Footer */}
        <div className="mb-4 text-center">
          <img src="/images/logo.png" alt="โลโก้บริษัท" width={120} height={40} />
        </div>

        <div className="row">
          <div className="col-6 col-md-2 mb-3">
            <h5>แหล่งข้อมูล</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">ค้นหาหน้าร้าน</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">ตัวค้นหารองเท้าวิ่ง</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">สมัครเป็น Member</a></li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5>ช่วยเหลือ</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">รับความช่วยเหลือ</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">สถานะคำสั่งซื้อ</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">การส่งมอบ</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">การคืนสินค้า</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">ทางเลือกชำระเงิน</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">ติดต่อเรา</a></li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5>บริษัท</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">เกี่ยวกับ Nike</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">ร่วมงานกับเรา</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">ร่วมลงทุนกับเรา</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">ความยั่งยืน</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">ผลกระทบ</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">แจ้งข้อกังวล</a></li>
            </ul>
          </div>

          <div className="col-md-5 offset-md-1 mb-3">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                <input id="newsletter1" type="email" className="form-control" placeholder="Email address" />
                <button className="btn btn-primary" type="button">Subscribe</button>
              </div>
            </form>
          </div>
        </div>

        {/* 🔽 ส่วนล่างพร้อมโลโก้ + Social */}
        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center py-4 my-4 border-top">
          <div className="d-flex align-items-center mb-3 mb-sm-0">
            <img src="/images/logo.png" alt="โลโก้บริษัท" width={100} height={30} className="me-3" />
            <p className="mb-0">© 2025 Company, Inc. All rights reserved.</p>
          </div>

          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <a className="link-body-emphasis" href="#" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis" href="#" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
