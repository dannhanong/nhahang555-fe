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
import EditEmployee from './components/Employee/EditEmployee';
import Schedule from './components/Cv/Lichlv';
import EditShcedule from './components/Cv/editShedule';
import CreateSchedule from './components/Cv/CreateSheule';
import CreateFood from './components/food/CreateFood';
import FoodIndex from './components/food/FoodIndex';
import EditFood from './components/food/EditFood';


import { BranchIndex } from './components/branches/BranchIndex';
import { CreateBranch } from './components/branches/CreateBranch';
import { EditBranch } from './components/branches/EditBranch';
import { DeleteBranch } from './components/branches/DeleteBranch'

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
        <Route path='/home' element={<Header />} />
        <Route path="/booking" element={<BookingIndex />} />
        <Route path="/employees" element={<EmployeeIndex />} />
        <Route path="employees/create" element={<CreateEmployee />} />
        <Route path="employees/edit/:id" element={<EditEmployee />} />
        <Route path="/menu" element={<MenuIndex />} />
        <Route path="/foods/create" element={<CreateFood />} />
        <Route path='/foods' element={<FoodIndex />} />
        <Route path="/foods/edit/:id" element={<EditFood />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/schedule/edit/:id" element={<EditShcedule />} />
        <Route path="/schedule/create" element={<CreateSchedule />} />
        <Route path="/branches" element={<BranchIndex />} />
        <Route path="branches/create" element={<CreateBranch />} />
        <Route path="branches/edit/:id" element={<EditBranch />} />
        <Route path="branches/delete" element={<DeleteBranch />} />
        

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
