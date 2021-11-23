import React from "react";
import './style.css';
import SalonData from './Api';
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

const SalonCard= () =>{

    return(
        <div className="main-card">
            <div className="card-container">
                {SalonData.map((element)=>{
                    return(
                        <>
                            <div className="container">
                                <img src={element.image} className="image-spa"/>
                                <h2 className="card-title">{element.name}</h2>
                                <div className="card-description">{element.description}</div>
                                <div className="card-review">{element.reviews} <FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStarHalfAlt/> </div>
                                <div>{element.service.map((e) =>
                                    <div className="main-service">
                                        <div className="salon-service">
                                            <span className="services1">{e.hair}</span> <br/>
                                            <span className="services-price">{e.priceH}</span> <br/>
                                            <span className="services-time">{e.timeH}</span>
                                            <button className="booking">Book Now</button>
                                        </div>

                                        <div className="salon-service">
                                            <span className="services1">{e.face}</span> <br/>
                                            <span className="services-price">{e.priceF}</span> <br/>
                                            <span className="services-time">{e.timeF}</span>
                                            <button className="booking">Book Now</button>
                                        </div>

                                        <div className="salon-service">
                                            <span className="services1">{e.wax}</span> <br/>
                                            <span className="services-price">{e.priceW}</span> <br/>
                                            <span className="services-time">{e.timeW}</span>
                                            <button className="booking">Book Now</button>
                                        </div>

                                        <div className="salon-service">
                                            <span className="services1">{e.body}</span> <br/>
                                            <span className="services-price">{e.priceB}</span> <br/>
                                            <span className="services-time">{e.timeB}</span>
                                            <button className="booking">Book Now</button>
                                        </div>

                                        <div className="salon-service">
                                            <span className="services1">{e.makeup}</span> <br/>
                                            <span className="services-price">{e.priceM}</span> <br/>
                                            <span className="services-time">{e.timeM}</span>
                                            <button className="booking">Book Now</button>
                                        </div>

                                        <div className="salon-service">
                                            <span className="services1">{e.nail}</span> <br/>
                                            <span className="services-price">{e.priceN}</span> <br/>
                                            <span className="services-time">{e.timeN}</span>
                                            <button className="booking">Book Now</button>
                                        </div>

                                    </div>   
                                )}
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>

        </div>
    );
}
export default SalonCard;