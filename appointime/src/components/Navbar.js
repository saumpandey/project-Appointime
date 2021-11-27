import React,{useState} from 'react';
import img1 from '../images/Logo.png';
import './style.css';
import { FaAngleDown } from "react-icons/fa";
import {FiX} from "react-icons/fi";
import {FaBars} from "react-icons/fa";

const Navbar = () => {

    const [show, setShow] = useState(false);

    return (
        <div>
            <div className="navBar">
                <div className="logo"> <img src={img1} style={{
                    width: '120px',
                    height:'140px',
                }} /> 
                </div>

                <div className="menu">
                    <input type="checkbox" id="chk" />
                    <label for="chk" className="show-btn">
                        <FaBars/>
                    </label>
                    <ul className="menu-list">
                        <a href="/"><li>Home</li></a>
                        <a href="/products"> <li>Shop</li> </a>
                        <li>The Salons <button  className="icon" onClick={()=>setShow(!show)}><FaAngleDown /></button> </li>
                        <a href="/spa"> <li>The Spa</li> </a>
                        <a href="/blog"><li>Blog</li> </a>
                        <button className="book">Book Now</button>   

                        <label for="chk" className="hide-btn"><FiX/></label>
                    </ul>   
                 </div>
            </div>

            {
               show?<div className="dropBar">
                        <div className="drop-box">
                            <a href="/salon_women">Women</a> <br/>
                            <a href="/salon_men">Men</a>
                        </div>
                    </div>:null
            } 

        </div>
    )
}

export default Navbar
