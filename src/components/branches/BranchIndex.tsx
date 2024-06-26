import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import External from '../layouts/External';


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
        const [search, setSearch] = useState<string>('');
      
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

        const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          setSearch(e.target.value);
        }

        const filteredBranches = branch.filter((branch) => 
          (branch.br_id.toLowerCase().includes(search.toLowerCase())) ||
          (branch.manager.toLowerCase().includes(search.toLowerCase())) ||
          (branch.phone_number.toString().includes(search.toLowerCase())) ||
          (branch.address.toLowerCase().includes(search.toLowerCase()))
        );

        React.useEffect(() => {
            loadBranches();
        }, []);
    
    
  return (
    <div className="container mt-4">
    <div className="card container">
      <div className='card-header'>
        <div className='row'>
          <div className="col-md-6">
            <h3>Danh Sách chi nhánh</h3>
          </div>
          <div className="col-md-6">
              <input type="search" name="" id="" 
              placeholder='Tìm kiếm' 
              className='col-md-8 mt-1'
              value={search}
              onChange={handleSearchChange}/>
              <button className="btn btn-primary float-end" onClick={handleAdd}>Thêm mới</button>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="mb-3 d-flex justify-content-between">
          <External />
        </div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th className="text-center align-middle">Mã chi nhánh</th>
              {/* <th className="text-center align-middle">Đánh giá</th> */}
              <th className="text-center align-middle">Quản lí</th>
              <th className="text-center align-middle">Nhà cung cấp nguyên liệu</th>
              <th className="text-center align-middle">Số điện thoại</th>
              <th className="text-center align-middle">Địa chỉ</th>
              {/* <th className="text-center align-middle">Lợi nhuận</th> */}
              <th className="text-center align-middle">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {filteredBranches.map((branch, index) => (
              <tr key={branch.id}>
                <td className="text-center align-middle">{branch.br_id}</td>
                {/* <td className="text-center align-middle">{branch.vote}</td> */}
                <td className="text-center align-middle">{branch.manager}</td>
                <td className="text-center align-middle">{branch.supplier}</td>
                <td className="text-center align-middle">{branch.phone_number}</td>
                
                <td className="text-center align-middle">{branch.address}</td>
                {/* <td className="text-center align-middle">{branch.profit}</td> */}
                <td className="text-center align-middle">
                  <a 
                    className="btn btn-sm btn-primary me-2" 
                    style={{ borderRadius: '8px' }}
                    onClick={() => handleEdit(branch.id)}
                  >
                    <i className="fa fa-pencil"></i>
                  </a>
                  <a 
                    className="btn btn-sm btn-danger ms-2" 
                    style={{ borderRadius: '8px' }} 
                    onClick={() => handleShow(branch.id)}
                  >
                    <i className="fa fa-trash"></i>
                  </a>
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