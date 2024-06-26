import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
    <div className="container-xxl py-5 bg-dark hero-header mb-5">
                <div className="container my-5 py-5">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 text-center text-lg-start">
                            <h1 className="display-3 text-white animated slideInLeft">Thưởng thức<br />Những bữa ăn ngon</h1>
                            <p className="text-white animated slideInLeft mb-4 pb-2">Chất lượng hàng đầu, giá cả phải chăng</p>
                            <Link to="/booking" className="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft">Đặt bàn ngay</Link>
                        </div>
                        <div className="col-lg-6 text-center text-lg-end overflow-hidden">
                            <img className="img-fluid" src="img/hero.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Header
