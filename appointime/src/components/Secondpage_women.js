import React from 'react'
import './style.css';
import SalonCard from './SalonCard';
import img4 from '../images/image4.jpg'
import img5 from '../images/image5.jpg';
import img6 from '../images/image6.jpg';
import img7 from '../images/image7.jpg';

   
const Secondpage_women= () =>{

    return(
        <>
            <div className="image">
                <div className="container2" >
        
                        <div className="img1">
                            <img src={img4}></img>
                        </div>

                        <div className="img2">
                            <img src={img5}></img>
                        </div>

                        <div className="img3">
                            <img src={img6}></img>
                        </div>

                        <div className="img4"> 
                            <img src={img7}></img>
                        </div>
                </div >
            </div>
            <div className="navbar">
                <SalonCard />
            </div>
        </>
    )
}

export default Secondpage_women;