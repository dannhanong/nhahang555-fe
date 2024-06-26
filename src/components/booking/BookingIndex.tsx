import React from 'react'
import Swal from 'sweetalert2';

const BookingIndex = () => {
    const notify = (e: any) => {
        e.preventDefault();
        Swal.fire(
            'Thành công!',
            'Đặt bàn thành công.',
            'success'
        )
    }

  return (
    <div>
        <div className="container-xxl py-5 px-0 wow fadeInUp" data-wow-delay="0.1s">
            <div className="row g-0">
                <div className="col-md-6">
                    <div className="video">
                        <button type="button" className="btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                            <span></span>
                        </button>
                    </div>
                </div>
                <div className="col-md-6 bg-dark d-flex align-items-center">
                    <div className="p-5 wow fadeInUp" data-wow-delay="0.2s">
                        <h5 className="section-title ff-secondary text-start text-primary fw-normal">Đặt bàn</h5>
                        <h1 className="text-white mb-4">Liên hệ đặt bàn </h1>
                        <form>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                        <label htmlFor='name'>Tên</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="email" className="form-control" id="email" placeholder="Your Email" />
                                        <label htmlFor="email">Email</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating" id="date3" data-target-input="nearest">
                                        <input type="datetime-local" className="form-control" id="datetime1" placeholder="Date & Time" data-target="#date3" />
                                        <label htmlFor="datetime1">Ngày tháng</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <select className="form-select" id="select1">
                                          <option value="1">Một người</option>
                                          <option value="2">Hai người</option>
                                          <option value="3">Ba người</option>
                                            <option value="4">Bốn người</option>
                                            <option value="5">Năm người</option>
                                            <option value="6">Sáu người</option>
                                        </select>
                                        <label htmlFor="select1">Số lượng người</label>
                                      </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <textarea className="form-control" placeholder="Special Request" id="message" style={{ height: 100 }}></textarea>
                                        <label htmlFor="message">Ghi chú</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button onClick={notify} className="btn btn-primary w-100 py-3" type="submit">Đặt</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div className="modal fade" id="videoModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content rounded-0">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Video</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="ratio ratio-16x9">
                            <iframe className="embed-responsive-item" src="" id="video"
                                allow="autoplay"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BookingIndex