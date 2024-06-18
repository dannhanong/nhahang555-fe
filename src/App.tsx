import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import { Route, Routes, useLocation } from 'react-router-dom';
import BookingIndex from './components/booking/BookingIndex';
import EmployeeIndex from './components/Employee/EmployeeIndex';
import MenuIndex from './components/menu/MenuIndex';
import Header from './components/layouts/Header';
import AdminNavbar from './components/layouts/AdminNavbar';
import CreateEmployee from './components/Employee/CreateEmployee';
import FoodIndex from './components/food/FoodIndex';
import CreateFood from './components/food/CreateFood';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const path = location.pathname;
      if (path.startsWith('/employees') || path.startsWith('/foods')){
        setIsAdmin(true);
      }
      else {
        setIsAdmin(false);
      }
  }, [location])

  return (
    <div>
      {isAdmin ? <AdminNavbar /> : <Navbar />}
      <Routes>
        <Route path='/' element={<Header />} />
        <Route path="/booking" element={<BookingIndex />} />
        <Route path="/employees" element={<EmployeeIndex />} />
        <Route path="employees/create" element={<CreateEmployee />} />
        <Route path="/menu" element={<MenuIndex />} />
        <Route path="/foods/create" element={<CreateFood />} />
        <Route path='/foods' element={<FoodIndex />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
