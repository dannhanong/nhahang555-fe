import React from 'react'

const Footer = () => {
  return (
    <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6">
                        <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Công Ty</h4>
                        <a className="btn btn-link" href="">Về Chúng Tôi</a>
                        <a className="btn btn-link" href="">Liên Hệ</a>
                        <a className="btn btn-link" href="">Đặt Chỗ</a>
                        <a className="btn btn-link" href="">Chính Sách Bảo Mật</a>
                        <a className="btn btn-link" href="">Điều Khoản & Điều Kiện</a>

                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Liên Hệ</h4>
                        <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>165 P. Thái Hà, Láng Hạ, Đống Đa, Hà Nội</p>
                        <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>024 3786 8866</p>
                        <p className="mb-2"><i className="fa fa-envelope me-3"></i>restaurant555@gmail.com.vn</p>
                        <div className="d-flex pt-2">
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-youtube"></i></a>
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Giờ Mở Cửa</h4>
                        <h5 className="text-light fw-normal">Thứ Hai - Thứ Bảy</h5>
                        <p>09:00 - 21:00</p>
                        <h5 className="text-light fw-normal">Chủ Nhật</h5>
                        <p>10:00 - 20:00</p>

                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Bản Tin</h4>
                        <p>Thông tin mới nhất về các dịch vụ và ưu đãi của chúng tôi.</p>
                        <div className="position-relative mx-auto" style={{ maxWidth: "400px" }}>
                            <input className="form-control border-primary w-100 py-3 ps-4 pe-5" type="text" placeholder="Email"  />
                            <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">Đăng ký</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="copyright">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <a className="border-bottom" href="#">restaurant555.com</a>                          
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <div className="footer-menu">
                            <a href="">Trang Chủ</a>
                            <a href="">Cookies</a>
                            <a href="">Trợ Giúp</a>
                            <a href="">Câu Hỏi Thường Gặp</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Footer;