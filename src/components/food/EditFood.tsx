import axios from 'axios';
import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';

const EditFood = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    type Food = {
        id?: number;
        name?: string;
        price?: number;
        img?: string;
        category_id?: number;
    }

    type Category = {
        id: number;
        name: string;
    }

    const [food, setFood] = React.useState<Food>({});
    const [categories, setCategories] = React.useState<Category[]>([]);

    const getFood = async () => {
        const result = await axios.get(`http://localhost:5000/foods/${id}`);        
        setFood(result.data);
    }

    const getCategories = async () => {
        const result = await axios.get('http://localhost:5000/categories');
        setCategories(result.data);
    }

    React.useEffect(() => {
        getFood();
        getCategories();
    }, []);

    const handleChage = (e: any) => {
        setFood({...food, [e.target.name] : e.target.value});
    }

    const saveFood = async (e: React.FormEvent) => {
        e.preventDefault();
        await axios.put(`http://localhost:5000/foods/${id}`, food);
        // toast.success('Cập nhật món ăn thành công');
        navigate('/foods');
        Swal.fire(
          'Thành công!',
          'Món ăn của bạn đã được cập nhật thành công.',
          'success'
        )
    }

  return (
    <div>
      <section>
      <h1 className="text-center text-dark">Chỉnh Sửa Thông Tin Món Ăn</h1>

      <div className="container-fluid col-8">
        <div className="row">
          <div className="col-sm">
            <form onSubmit={e => saveFood(e)}>
              <div className="mb-3 d-flex align-items-center">
                <label className="form-label col-3">Tên món ăn:</label>
                <input className="form-control" type="text" name="name" id="" value={food.name} onChange={e => handleChage(e)}/>
              </div>

              <div className="mb-3 d-flex align-items-center">
                <label className="form-label col-3" htmlFor="price">Giá:</label>
                <input className="form-control" type="text" name="price" id="price" value={food.price} onChange={e => handleChage(e)} style={{ borderRadius: "5px" }} />
              </div>

              <div className="mb-3 d-flex align-items-center">
                <label className="form-label col-3" htmlFor="img">Hình ảnh:</label>
                <img src={food.img} style={{ width: 100, height: 110, borderRadius: '5%' }} alt="Img" />
              </div>

              <div className="input-group mt-3 mb-3">
                <label className="form-label col-3" htmlFor="category_id">Danh mục:</label>
                    <select name='category_id' className="form-control" value={food.category_id} onChange={e => handleChage(e)}>
                        {
                            categories.map((category, index) =>  (
                                <option className="form-control" value={category.id}>{category.name}</option>
                            ))
                        }
                    </select>
                </div>

              <div className="form-group float-end">
                <Link to={"/foods"} type="button" className="btn btn-secondary me-2" style={{ 
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
            <ToastContainer />
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default EditFood
