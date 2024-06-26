import axios from 'axios';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddEmployee = () => {
  type Employee = {
    id?: number;
    name?: string;
    sex?: string | null;
    dob?: string;
    country?: string;
    phone?: string;
    email?: string;
    startDate?: string;
  };

  const navigate = useNavigate();

  const [employee, setEmployee] = React.useState<Employee>({});

  const handleBack = () => {
    navigate('/employees'); 
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await axios.post('http://localhost:5000/employees', employee);
    navigate('/employees'); 
    Swal.fire(
      'Thành công!',
      'Nhân viên của bạn đã được thêm thành công.',
      'success'
    )
  };

  const handleChage = (e: any) => {
    const {name, value} = e.target;
    setEmployee({...employee, [name] : value});
  }

  return (
    <section>
      <h1 className="text-center text-dark">Thêm Nhân Viên</h1>

      <div className="container-fluid col-8">
        <div className="row">
          <div className="col-sm">
            <form onSubmit={e => handleSubmit(e)}>
              <div className="mb-3 d-flex align-items-center">
                <label className="form-label col-3" htmlFor="name">Họ và tên:</label>
                <input className="form-control" type="text" name="name" id="name" style={{ borderRadius: "5px" }} value={employee.name} onChange={e => handleChage(e)} />
              </div>

              <div className="mb-3 d-flex align-items-center">
                <label className="form-label col-3">Giới tính:</label>
                <div className="form-check form-check-inline">
                  <input className="form-check-input mt-1" type="radio" name="sex" id="male" value="Nam" onChange={e => handleChage(e)} />
                  <label className="form-check-label" htmlFor="male">Nam</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input mt-1" type="radio" name="sex" id="female" value="Nữ" onChange={e => handleChage(e)} />
                  <label className="form-check-label" htmlFor="female">Nữ</label>
                </div>
              </div>

              <div className="mb-3 d-flex align-items-center">
                <label className="form-label col-3" htmlFor="dob">Ngày sinh:</label>
                <input className="form-control" type="date" name="dob" id="dob" style={{ borderRadius: "5px" }} value={employee.dob} onChange={e => handleChage(e)} />
              </div>

              <div className="mb-3 d-flex align-items-center">
                <label className="form-label col-3" htmlFor="country">Quê quán:</label>
                <input className="form-control" type="text" name="country" id="country" style={{ borderRadius: "5px" }} value={employee.country} onChange={e => handleChage(e)} />
              </div>

              <div className="mb-3 d-flex align-items-center">
                <label className="form-label col-3" htmlFor="phone">SĐT:</label>
                <input className="form-control" type="tel" name="phone" id="phone" style={{ borderRadius: "5px" }} value={employee.phone} onChange={e => handleChage(e)} />
              </div>

              <div className="mb-3 d-flex align-items-center">
                <label className="form-label col-3" htmlFor="email">Email:</label>
                <input className="form-control" type="text" name="email" id="email" style={{ borderRadius: "5px" }} value={employee.email} onChange={e => handleChage(e)} />
              </div>

              <div className="mb-3 d-flex align-items-center">
                <label className="form-label col-3" htmlFor="startDate">Ngày bắt đầu:</label>
                <input className="form-control" type="date" name="startDate" id="startDate" style={{ borderRadius: "5px" }} value={employee.startDate} onChange={e => handleChage(e)} />
              </div>

              <div className="form-group float-end">
                <Link to={"/employees"} type="button" className="btn btn-secondary me-2" style={{ 
                borderRadius: '5px', 
                // backgroundColor: 'red', 
                border: '2px solid', 
                padding: '8px 16px', 
                fontSize: '16px',  
                fontWeight: 'bold'  
                }}>Quay lại</Link>

                <button type="submit" className="btn btn-primary" style={{ 
                borderRadius: '5px', 
                // backgroundColor: 'blue', 
                border: '2px solid', 
                padding: '8px 16px', 
                fontSize: '16px',  
                fontWeight: 'bold'  
                }}>Lưu</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AddEmployee;
