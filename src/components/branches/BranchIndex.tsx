import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const BranchIndex = () =>{
    type Branch = {
        id : number;
        br_id:string;
        vote : string;
        manager : string;
        supplier: string;
        phone_number: number;
        address: string;
        profit:number;

    };
    const [branch, setBranches] = React.useState<Branch[]>([]);
        const [showModal, setShowModal] = useState(false);
        const navigate = useNavigate();
        const [selectedBranchId, setSelectedBranchId] = useState<number | null>(null);

      
        const handleClose = () => setShowModal(false);
        const handleShow = (id:number) => {
          setSelectedBranchId(id);
          setShowModal(true);
        }
      
        const handleEdit = (id: number) => {
          navigate(`/branches/edit/${id}`);
        };
        const handleAdd = () => {
          navigate('/branches/create');
        };

       
      
    
        const loadBranches = async () => {
            const result = await axios.get('http://localhost:5000/branches');
            setBranches(result.data);
        }
        
        const handleDelete = async () => {
          const result = await axios.get('http://localhost:5000/branches');
          if (result !== null) {
              await axios.delete(`http://localhost:5000/branches/${selectedBranchId}`);
              setBranches(branch.filter((b) => b.id !== selectedBranchId));
              setShowModal(false);
              toast.success("Xóa thành công !", {
                position: 'bottom-left',
              });
          }
        }; 

        React.useEffect(() => {
            loadBranches();
        }, []);
    
    
  return (
    <div className="container mt-4">
    <div className="card container">
      <div className="card-header">
        <h3>Danh Sách chi nhánh</h3>
      </div>
      <div className="card-body">
        <div className="mb-3 d-flex justify-content-between">
          <div>
            <button className="btn btn-info me-2" style={{ borderRadius: '8px' }}>Copy</button>
            <button className="btn btn-success me-2" style={{ borderRadius: '8px' }}>CSV</button>
            <button className="btn btn-danger me-2" style={{ borderRadius: '8px' }}>PDF</button>
          </div>
          <div>
            <button className="btn " style={{ borderRadius: '8px',backgroundColor: 'blue',color: 'white' }} onClick={handleAdd}>Thêm</button>
            <button className="btn btn-secondary ms-2" style={{ borderRadius: '8px' }}>Lọc</button>
          </div>
        </div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th className="text-center align-middle">Mã chi nhánh</th>
              <th className="text-center align-middle">Đánh giá</th>
              <th className="text-center align-middle">Quản lí</th>
              <th className="text-center align-middle">Nhà cung cấp nguyên liệu</th>
              <th className="text-center align-middle">Số điện thoại</th>
              <th className="text-center align-middle">Địa chỉ</th>
              <th className="text-center align-middle">Lợi nhuận</th>
              <th className="text-center align-middle">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {branch.map((branch, index) => (
              <tr key={branch.id}>
                <td className="text-center align-middle">{branch.br_id}</td>
                <td className="text-center align-middle">{branch.vote}</td>
                <td className="text-center align-middle">{branch.manager}</td>
                <td className="text-center align-middle">{branch.supplier}</td>
                <td className="text-center align-middle">{branch.phone_number}</td>
                
                <td className="text-center align-middle">{branch.address}</td>
                <td className="text-center align-middle">{branch.profit}</td>
                <td className="text-center align-middle">
                  <button 
                    className="btn btn-sm btn-primary me-2" 
                    style={{ borderRadius: '8px' }}
                    onClick={() => handleEdit(branch.id)}
                  >
                    <i className="fa fa-pencil"></i>
                  </button>
                  <button 
                    className="btn btn-sm btn-danger" 
                    style={{ borderRadius: '8px' }} 
                    onClick={() => handleShow(branch.id)}
                  >
                    <i className="fa fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

        <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Xác Nhận Xóa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Bạn có chắc chắn muốn xóa?
        </Modal.Body>
        <Modal.Footer>
            <Button 
            variant="secondary" 
            onClick={handleClose} 
            style={{ 
                borderRadius: '8px', 
                backgroundColor: 'white', 
                border: '2px solid red', 
                color: 'black',  
                padding: '8px 16px', 
                fontSize: '16px',  
                fontWeight: 'bold'  
            }}
            >
            Quay lại
            </Button>
            <div> 
            <Button 
            variant="primary" onClick={handleDelete} style={{ 
                borderRadius: '8px', 
                backgroundColor: 'white', 
                border: '2px solid blue', 
                color: 'black',
                padding: '8px 16px', 
                fontSize: '16px',  
                fontWeight: 'bold'  
            }}> Có </Button>
            
              <ToastContainer />
            </div>
           

        </Modal.Footer>
        </Modal>
    </div>
  )

}