import axios from 'axios';
import { on } from 'events';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

const MenuIndex = () => {
    const location = useLocation();

    type Category = {
        id: number;
        name: string;
        icon: string;
    };

    type Food = {
        id: number;
        name: string;
        price: number;
        img: string;
        category_id: number;
    };

    const [categories, setCategories]  =  useState<Category[]>([]);
    const [foods, setFoods] = useState<Food[]>([]);
    const [catId, setCatId] = useState<number>(0);

    const loadCategories = async () => {
        const result = await axios.get("http://localhost:5000/categories", {
            validateStatus: () => {
                return true;
            }
        });
        setCategories(result.data);
    }

    const clickCategory = async (id: number) => {
        setCatId(id);
    }

    const loadFoods = async () => {
        if (catId != 0) {
            const result = await axios.get("http://localhost:5000/foods?category_id="+catId);
            console.log(result.data);
            setFoods(result.data);
        }   
        else {
            const result = await axios.get("http://localhost:5000/foods");
            setFoods(result.data);
        }     
    }

    useEffect(() => {
        loadCategories();
        loadFoods();
        clickCategory(catId);
    }, [catId]);

  return (
    <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h5 className="section-title ff-secondary text-center text-primary fw-normal" onClick={() => setCatId(0)}>Thực đơn</h5>

                </div>
                <div className="tab-className text-center wow fadeInUp" data-wow-delay="0.1s">
                <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                {categories.map((category, index) => (
                    <li className="nav-item" key={category.id}>
                        <a onClick={() => clickCategory(category.id)} className="d-flex align-items-center text-start mx-3 ms-0 pb-3" data-bs-toggle="pill" href="#tab-1">
                            <i className={category.icon}></i>
                            <div className="ps-3">
                            <h6 className="mt-n1 mb-0">{category.name}</h6>
                            </div>
                        </a>
                    </li>
                ))
                }
                </ul>
                    <div className="tab-content">
                        <div id="tab-1" className="tab-pane fade show p-0 active">
                            <div className="row g-4">
                                {
                                    foods.map((food, index) => (
                                    <div className="col-lg-6" key={food.id}>
                                    <div className="d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid rounded" src={food.img} alt="" style={{ width: 80, height: 60 }}  />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                    <span>{food.name}</span>
                                                    <div>
                                                        <span className="text-primary">{food.price}</span>
                                                        <i className="fa fa-heart"></i>
                                                    </div>
                                                </h5>
                            
                                            </div>
                                        </div>
                                    </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default MenuIndex
