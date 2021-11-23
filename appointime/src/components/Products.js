import React, {useState} from "react";
import './style.css';
import { Product } from "./Api";
import { FaShoppingCart} from 'react-icons/fa';
import {FiX} from "react-icons/fi";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Products= () =>{

    const[items, setItems]= useState(Product);
    const [show, setShow] = useState(false);

    const filterItem=(element) =>{
        const updatedList= Product.filter((cat) =>{
            return cat.category=== element;
        });

        setItems(updatedList);
    };

    const [num, setNum] = useState(0);

    return(
        <>
            <Navbar/>
            <div className="main-container">
                <div className="menu">
                    <div className="category">
                        <span className='browse'>Browse By Category</span> <br/> <br/>
                        <button className="buttons" onClick={() => setItems(Product)} >All Items</button> <br />
                        <button className="buttons" onClick={() => filterItem('skin')} >Skin Care</button> <br />
                        <button className="buttons" onClick={() => filterItem('tool')} >Hair Tools</button> <br />
                        <button className="buttons" onClick={() => filterItem('hair')} >Special Hair Care</button> <br />
                    </div>
                </div>

                <div className="line">
                <button className="cart-btn" onClick={()=>setShow(!show)}> <FaShoppingCart/></button>
                    <p> {num}</p>
                </div>

                <div className="main-cards">
                    {
                        items.map((ele) =>{
                            return(
                                <>
                                    <div className="card">
                                        <img src={ele.img} className="image" />
                                        <div className="des">{ele.description}</div>
                                        <div className="price">{ele.price}</div>
                                        <button className="cart" onClick={() =>{setNum(num+1)}}> <FaShoppingCart/> Add To Cart</button>
                                    </div>
                                </>
                            )
                        })
                    }
                </div> 

                    {
                        show?<div className="sideBar">
                                <div className="header">
                                    <p>Shopping Cart</p>
                                    <button className="cross" onClick={()=> setShow(!show)}><FiX/></button>
                                </div>
                            </div>:null
                    } 

            </div>
            <Footer/>
        </>
    )
}

export default Products;