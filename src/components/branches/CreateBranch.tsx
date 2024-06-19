import axios from 'axios';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const CreateBranch = () => {
    let navigate = useNavigate();
    type Branch = {
        id ?: number;
        br_id?:string;
        vote ?: string;
        manager ?: string;
        supplier?: string;
        phone_number?: number;
        address?: string;
        profit?:number;

    };

    const [branch, setBranch] = React.useState<Branch>({});


    const saveBranch = async (e: React.FormEvent) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/branches', branch);
        navigate('/branches');
    }

    const handleChage = (e: any) => {
        setBranch({...branch, [e.target.name] : e.target.value});
    }


  return (
    <section className="content bg-white" style={{ height: "85vh" }}>
            <h1 className="text-center text-dark">Thêm chi nhánh</h1>

            <div className="container-fluid col-8">
                <div className="row">
                    <div className="col-sm">
                        <form onSubmit={e => saveBranch(e)}>
                            <div className="input-group mt-3 mb-3">
                                <label className="input-group-text" htmlFor="">Mã chi nhánh:</label>
                                <input className="form-control" type="text" name="br_id" id="" value={branch.br_id} onChange={e => handleChage(e)} />
                            </div>

                            <div className="input-group mt-3 mb-3">
                                <label className="input-group-text" htmlFor="">Quản lý trưởng chi nhánh:</label>
                                <input className="form-control" name="manager" id="" value={branch.manager} onChange={e => handleChage(e)} />
                            </div>

                            <div className="input-group mt-3 mb-3">
                                <label className="input-group-text" htmlFor="">Nhà cung cấp nguyên liệu:</label>
                                <input className="form-control" type="" name="supplier" id="" value={branch.supplier} onChange={e => handleChage(e)}/>
                            </div>

                            <div className="input-group mt-3 mb-3">
                                <label className="input-group-text" htmlFor="">Số điện thoại:</label>
                                <input className="form-control" type="number" name="phone_number" id="" value={branch.phone_number} onChange={e => handleChage(e)} />
                            </div>
                            <div className="input-group mt-3 mb-3">
                                <label className="input-group-text" htmlFor="">Địa chỉ:</label>
                                <input className="form-control" type="text" name="address" id="" value={branch.address} onChange={e => handleChage(e)} />
                            </div>
                            <div className="form-group  float-end ">
                                <Link to="/branches"  className="btn btn-secondary ">Back </Link>
                                <input type="submit" value="Create" className="btn btn-primary" name="btAdd" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
  )
}
