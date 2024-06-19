import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const homeActive = location.pathname.startsWith('/home');
    const menuActive = location.pathname.startsWith('/menu');

    return (
        <div className="container-xxl position-relative p-0">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 ps-lg-5 py-3 py-lg-0">
                <Link to="/home" className="navbar-brand p-0">
                    <h1 className="text-primary m-0"><i className="fa fa-utensils me-3"></i>555</h1>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                        <Link to="/home" className={`nav-item nav-link ${homeActive ? 'active' : ''}`}>Trang chủ</Link>
                        <Link to="/menu" className={`nav-item nav-link ${menuActive ? 'active' : ''}`}>Thực đơn</Link>
                        <Link to="/booking" className="nav-item nav-link ">Đặt bàn</Link>
                    </div>
                    <div className="nav-item dropdown ms-3">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                            <i className="fa-solid fa-user" ></i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                            <Link to="/employees" className="dropdown-item">Khu vực quản trị</Link>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="container-xxl py-5 bg-dark hero-header mb-5">
            </div>
        </div>
    );
}

export default Navbar;
