import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';
import Swal from 'sweetalert2';
import External from '../layouts/External';

const EmployeeIndex = () => {
  type Employee = {
    id: number;
    name?: string;
    sex?: string;
    dob?: string;
    country?: string;
    phone?: string;
    email?: string;
    startDate?: string;
  };

  const [employees, setEmployees] = useState<Employee[]>([]);
  const [search, setSearch] = useState<string>('');

  const loadEmployees = async () => {
    const result = await axios.get('http://localhost:5000/employees');
    setEmployees(result.data);
  }

  useEffect(() => {
    loadEmployees();
  }, []);

  const handleDelete = (id: number) => {
    return (event: any) => {
      event.preventDefault();
      Swal.fire({
        title: 'Bạn có chắc chắn?',
        text: "Bạn sẽ không thể hoàn tác!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Có, hãy xóa!',
        cancelButtonText: 'Hủy'
      }).then((result) => {
        if (result.isConfirmed) {
          axios.delete(`http://localhost:5000/employees/${id}`);
          Swal.fire(
            'Đã Xóa!',
            'Nhân viên đã được xóa.',
            'success'
          )
          loadEmployees();
        }
      })
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredEmployees = employees.filter((employee) => 
    (employee.name?.toLowerCase().includes(search.toLowerCase())) ||
    (employee.country?.toLowerCase().includes(search.toLowerCase())) ||
    (employee.phone?.toLowerCase().includes(search.toLowerCase())) ||
    (employee.email?.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="container mt-4">
      <div className="card container">
        <div className="card-header">
          <div className="row">
            <div className="col-md-6">
              <h3>Danh Sách Nhân Sự</h3>
            </div>
            <div className="col-md-6">
                <input type="search" name="" id="" 
                placeholder='Tìm kiếm' 
                className='col-md-8 mt-1'
                value={search}
                onChange={handleSearchChange}/>
                <Link to="/employees/create" className="btn btn-primary float-end">Thêm mới</Link>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="mb-3 d-flex justify-content-between">
            <External />
            <div className='float-end mt-2'>
              <Link to={'/schedule'} className='text text-info text-decoration-none'>Lịch làm việc</Link>
            </div>
          </div>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th className="text-center align-middle">STT</th>
                <th className="text-center align-middle">Họ Tên</th>
                <th className="text-center align-middle">Giới Tính</th>
                <th className="text-center align-middle">Ngày sinh</th>
                <th className="text-center align-middle">Quê quán</th>
                <th className="text-center align-middle">SĐT</th>
                <th className="text-center align-middle">Email</th>
                <th className="text-center align-middle">Ngày Bắt Đầu</th>
                <th className="text-center align-middle">Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployees.map((employee, index) => (
                <tr key={employee.id}>
                  <td className="text-center align-middle">{index + 1}</td>
                  <td className="text-center align-middle">{employee.name}</td>
                  <td className="text-center align-middle">{employee.sex}</td>
                  <td className="text-center align-middle">{employee.dob}</td>
                  <td className="text-center align-middle">{employee.country}</td>
                  <td className="text-center align-middle">{employee.phone}</td>
                  <td className="text-center align-middle">{employee.email}</td>
                  <td className="text-center align-middle">{employee.startDate}</td>
                  <td className="text-center align-middle">
                      <Link to={`/employees/edit/${employee.id}`}><i className="fa-solid fa-pen-to-square"></i></Link>
                      <a href="#" onClick={handleDelete(employee.id)} data-toggle="modal"><i className="fa-solid fa-solid fa-trash ms-2"></i></a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmployeeIndex;
