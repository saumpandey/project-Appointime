import React from 'react'
import './style.css';
import { FaAngleDown } from "react-icons/fa";
import { Link, Outlet } from 'react-router-dom';
import image1 from '../images/background.jpg';
import img1 from '../images/Logo.png';
import img2 from '../images/shopimage.jpg';
import img3 from '../images/shopimage2.png';

function Firstpage(){
    return(
        <div className="App">
            <div className="navBar">
                <div className="logo"> <img src={img1} style={{
                    width: '120px',
                    height:'140px',
                }} /> 
                </div>

                <div className="menu">
                    <ul>
                        <Link to='/'><li>Home</li></Link>
                        <Link to='/products'><li>Shop</li></Link>
                        <Link to='/salon'><li>The Salons <button  className="icon"><FaAngleDown /></button> </li></Link>
                        <Link to='/spa'><li>The Spa</li></Link>
                        <Link to='/contact'><li>Contact</li></Link> 
                        <button className="book">Book Now</button>   
                    </ul>
                    
                 </div>
            </div>  
            <div className="backgroundimage">
                    <img src={image1} style={{
                        width: '100%',
                        height: '800px'
                    }}/>
                    <div className="text">
                        <h1>Make an appointment <br/> to the best salon <br/> of your choice</h1>
                    </div>
            </div>  

            <div className="box2">
                <h1> Our Mission</h1>
                <p>  Is to provide a software solution that
                 allows potential guests <br/> to self-book and pay through your 
                 website, and other channels <br/> while giving you the best tools
                 to run and scale your operation, all in one place.</p>
            </div>

            <div className="box3">
                    <h2>Shop Now</h2>
                    <p>The products are available for delivery or pick-up at salon</p>

                    <div className="shop1">
                        <img src= {img2} className="firstimage" />
                        <div className="category1">Hair Tools</div>
                        <button className="view" >View Product</button>
                    </div>

                    <div className="shop2">
                        <img src= {img3} className="firstimage" />
                        <div className="category1">Skin Care</div>
                        <button className="view">View Product</button>
                    </div>
            </div>
        </div>
    )
}

export default Firstpage;