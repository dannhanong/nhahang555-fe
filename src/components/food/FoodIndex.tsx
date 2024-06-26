import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';

const FoodIndex = () => {
    type Food = {
        id: number;
        name: string;
        price: number;
        img: string;
        category_id: number;
    };

    const [foods, setFoods] = React.useState<Food[]>([]);
    const [search, setSearch] = React.useState<string>('');

    const loadFoods = async () => {
        const result = await axios.get('http://localhost:5000/foods');
        setFoods(result.data);
    };

    const handleDelete = (id: number) => {
        return (event: any) => {
            event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ a
            Swal.fire({
              title: 'Bạn có chắc chắn?',
              text: "Bạn sẽ không thể hoàn tác!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Có, xóa nó!',
            cancelButtonText: 'Hủy'
            }).then((result) => {
              if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/foods/${id}`);
                // toast.success('Xóa món ăn thành công');
                Swal.fire(
                  'Đã Xóa!',
                  'Món ăn của bạn đã được xóa.',
                  'success'
                )
                loadFoods();
              }
            })
          }
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const filteredFoods = foods.filter((food) =>
        (food.name.toLowerCase().includes(search.toLowerCase())) ||
        (food.price.toString().includes(search.toLowerCase()))
    );
    
    console.log("filteredFoods", filteredFoods);

    React.useEffect(() => {
        loadFoods();
    }, []);

  return (
    <div>
      <div className="container mt-4">
                <div className="card container">
                    <div className="card-header">
                        <div className="row">
                            <div className="col-md-6">
                                <h3>Danh sách món ăn</h3>
                            </div>
                            <div className="col-md-6">
                                <input type="search" name="" id="" 
                                placeholder='Tìm kiếm' 
                                className='col-md-8 mt-1'
                                value={search}
                                onChange={handleSearchChange}/>

                                <Link to="/foods/create" className="btn btn-primary float-end">Thêm mới</Link>
                            </div>
                        </div>
                    </div>

                    <div className="card-body">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th className="text-center align-middle">STT</th>
                                    <th className="text-center align-middle">Tên món</th>
                                    <th className="text-center align-middle">Giá</th>
                                    <th className="text-center align-middle">Hình ảnh</th>
                                    <th className="text-center align-middle">Thao tác</th>
                                </tr>
                            </thead>

                            <tbody >
                                {
                                    filteredFoods.map((food, index) => (
                                        <tr key={food.id}>
                                        <td className="text-center align-middle">{index+1}</td>
                                        <td className="text-center align-middle">{food.name}</td>
                                        <td className="text-center align-middle">{food.price}</td>
                                        <td className="text-center align-middle">
                                            <img src={food.img} style={{ width: 70, height: 70, marginLeft: '20%', borderRadius: '50%' }} alt="Img" />
                                        </td>
                                        <td className="text-center align-middle">
                                            <Link to={`/foods/edit/${food.id}`}><i className="fa-solid fa-pen-to-square"></i></Link>
                                            <a href="#" onClick={handleDelete(food.id)} data-toggle="modal" data-target="#A{{ $user->id }}"><i className="fa-solid fa-solid fa-trash ms-2"></i></a>
                                        </td>
                                    </tr>
                                    ))
                                }  
                            </tbody>
                        </table>
                        <ToastContainer />
                    </div>
                </div>
            </div>
    </div>
  )
}

export default FoodIndex
