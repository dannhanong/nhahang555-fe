import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const EditEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState<Employee>();
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

  const getEmployee = async () => {
    const result = await axios.get(`http://localhost:5000/employees/${id}`);
    setEmployee(result.data);
  };

  const handleChange = (e: any) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  }

  React.useEffect(() => {
    getEmployee();
  }, []);

  const handleSave = async (event: React.FormEvent) => {
    event.preventDefault();
    await axios.put(`http://localhost:5000/employees/${id}`, employee);
    navigate('/employees'); // Navigate back to the employee list after saving
    Swal.fire(
      'Thành công!',
      'Cập nhật nhân viên thành công.',
      'success'
    )
  };

  // if (!employee) {
  //   return <div>Loading...</div>;
  // }

  return (
    <section>
      <h1 className="text-center text-dark">Chỉnh Sửa Thông Tin Nhân viên</h1>

      <div className="container-fluid col-8">
        <div className="row">
          <div className="col-sm">
            <form onSubmit={handleSave}>
              <div className="mb-3 d-flex align-items-center">
                <label className="form-label col-3" htmlFor="name">Họ và tên:</label>
                <input className="form-control" name='name' value={employee?.name} />
              </div>

              <div className="mb-3 d-flex align-items-center">
                <label className="form-label col-3">Giới tính:</label>
                <div className="form-check form-check-inline">
                  <label className="form-check-label" htmlFor="male">Nam</label>
                  {/* {employee?.sex === 'Nam' && ( */}
                    <input className="form-check-input mt-1" type="radio" name="sex" id="sex" value="Nam" checked={employee?.sex === 'Nam'} onChange={e => handleChange(e)} />
                  {/* // )} */}
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input mt-1" type="radio" name="sex" id="sex" value="Nữ" checked={employee?.sex === 'Nữ'} onChange={e => handleChange(e)} />
                  <label className="form-check-label" htmlFor="female">Nữ</label>
                </div>
              </div>

              <div className="mb-3 d-flex align-items-center">
                <label className="form-label col-3" htmlFor="birthDate">Ngày sinh:</label>
                <input className="form-control" type="date" name="birthDate" id="birthDate" value={employee?.dob} onChange={e => handleChange(e)} style={{ borderRadius: "5px" }} />
              </div>

              <div className="mb-3 d-flex align-items-center">
                <label className="form-label col-3" htmlFor="country">Quê quán:</label>
                <input className="form-control" type="text" name="country" id="country" value={employee?.country} onChange={e => handleChange(e)} style={{ borderRadius: "5px" }} />
              </div>

              <div className="mb-3 d-flex align-items-center">
                <label className="form-label col-3" htmlFor="phone">Số điện thoại:</label>
                <input className="form-control" type="tel" name="phone" id="phone" value={employee?.phone} onChange={e => handleChange(e)} style={{ borderRadius: "5px" }} />
              </div>

              <div className="mb-3 d-flex align-items-center">
                <label className="form-label col-3" htmlFor="email">Số điện thoại:</label>
                <input className="form-control" type="tel" name="email" id="email" value={employee?.email} onChange={e => handleChange(e)} style={{ borderRadius: "5px" }} />
              </div>

              <div className="mb-3 d-flex align-items-center">
                <label className="form-label col-3" htmlFor="startDate">Ngày bắt đầu:</label>
                <input className="form-control" type="date" name="startDate" id="startDate" value={employee?.startDate} onChange={e => handleChange(e)} style={{ borderRadius: "5px" }} />
              </div>

              <div className="form-group float-end">
                <Link to={"/employees"} type="button" className="btn btn-secondary me-2" style={{ 
                  borderRadius: '10px', 
                  // backgroundColor: 'red', 
                  border: '2px solid', 
                  padding: '8px 16px', 
                  fontSize: '16px',  
                  fontWeight: 'bold'  
                }}>Quay lại</Link>

                <button type="submit" className="btn btn-primary" style={{ 
                  borderRadius: '10px', 
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
};

export default EditEmployee;
