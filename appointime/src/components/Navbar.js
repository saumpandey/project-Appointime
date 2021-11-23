import React from 'react';
import img1 from '../images/Logo.png';
import './style.css';
import { FaAngleDown } from "react-icons/fa";
import {Link} from 'react-router-dom';
import Blog from './Blog';

const Navbar = () => {
    return (
        <div>
            <div className="navBar">
                <div className="logo"> <img src={img1} style={{
                    width: '120px',
                    height:'140px',
                }} /> 
                </div>

                <div className="menu">
                    <ul>
                        <a href="/"><li>Home</li></a>
                        <a href="/products"> <li>Shop</li> </a>
                        <a href="/salon"> <li>The Salons <button  className="icon"><FaAngleDown /></button> </li> </a>
                        <a href="/spa"> <li>The Spa</li> </a>
                        <a href="/blog"><li>Blog</li> </a>
                        <button className="book">Book Now</button>   
                    </ul>
                    
                 </div>
            </div>  
        </div>
    )
}

export default Navbar
