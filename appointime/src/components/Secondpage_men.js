import React from 'react'
import { MenApi } from './Api'
import Navbar from './Navbar'
import './style.css';
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import Footer from './Footer';

const Secondpage_men = () => {
    return (
        <div>
            <Navbar />

            <div className="men-main">
                {MenApi.map((ele) =>{
                    return(
                        <div className="container">
                            <img src={ele.img} className="image-spa"></img>
                            <div className="card-description">{ele.description}</div>
                            <div className="card-review">{ele.reviews} <FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStarHalfAlt/> </div>
                            <div>
                                {ele.service.map((e) =>
                                    <div className="men-service">
                                        <span className="se1">{e.hair}</span> <br/>
                                        <span className="pr1">{e.priceH}</span> <br/>
                                        <button className="men-btn">{ele.button}</button> <br/>
                                        <span className="se1">{e.hair2}</span> <br/>
                                        <span className="pr1">{e.priceH2}</span> <br/>
                                        <button className="men-btn">{ele.button}</button> <br/>
                                        <span className="se1">{e.face}</span> <br/>
                                        <span className="pr1">{e.priceF}</span> <br/>
                                        <button className="men-btn">{ele.button}</button> <br/>
                                        <span className="se1">{e.face2}</span> <br/>
                                        <span className="pr1">{e.priceF2}</span> <br/>
                                        <button className="men-btn">{ele.button}</button> <br/>
                                    </div>
                                )}
                            </div>
                        </div>
                    )
                })}
            </div> <br/>
            <Footer/>
        </div>
    )
}

export default Secondpage_men
