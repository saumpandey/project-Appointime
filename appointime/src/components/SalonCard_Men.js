import React from "react";
import './style.css';
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

const SalonCard_Men= ({Data}) =>{
    return(
        <>
            <div className="card-container">
                {Data.map((element)=>{
                    return(
                        <>
                            <div className="container" key={element.id}>
                                <h2 className="card-title">{element.name}</h2>
                                <div className="card-description">{element.description}</div>
                                <div className="card-review">{element.reviews} <FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStarHalfAlt/> </div>
                                <div className="heading">Services are</div>
                                <div className="card-services"> {element.service.map((ele)=>
                                    <table>
                                        <tr>
                                            <td>{ele.hair}</td>
                                            <td>{ele.priceH}</td>
                                            <td><button className="button">Book Now</button></td>
                                        </tr>

                                        <tr>
                                            <td>{ele.face}</td>
                                            <td>{ele.priceF}</td>
                                            <td><button className="button">Book Now</button></td>
                                        </tr>
                                    </table>
                                )}
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
        </>
    );
}
export default SalonCard_Men;