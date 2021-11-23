import React from 'react';
import './style.css';
import { SpaApi } from './Api';
import img4 from '../images/bgspa.jpg';
import Navbar from './Navbar';
import Footer from './Footer';

const Spa = () => {
    return (
        <div>
            <Navbar/>
             <div className="image1">
                    <img src={img4} style={{
                        height: '500px',
                        width:'100%',
                        marginTop:'10px'
                    }}/>
                    <div className="text2">Welcome to Spa <br/>
                        <p>Browse Your favourite Spa and just relax!</p>
                    </div>
                </div>

                <div className="spa-main">
                    {SpaApi.map((ele) =>{
                        return(
                            <div className="spa-container">
                                <img src={ele.img} className="image-spa"/>
                                <div> {ele.service.map((e) =>
                                    <div className="service-spa">
                                        <h1 className="explore-service">Explore Services</h1>
                                        <span className="s1">{e.s1}</span> <br/>
                                        <span className="p1">{e.price}</span>
                                        <button className="book-spa">Book Now</button> <br/> 
                                        <span className="s1">{e.s2}</span> <br/>
                                        <span className="p1">{e.price2}</span>
                                        <button className="book-spa">Book Now</button> <br/> 
                                        <span className="s1">{e.s3}</span> <br/>
                                        <span className="p1">{e.price3}</span>
                                        <button className="book-spa">Book Now</button> <br/>
                                    </div>
                                )} 
                                </div>
                            </div>
                        )
                    })}
                   
                </div>
                <Footer/>
        </div>
    )
}

export default Spa;
