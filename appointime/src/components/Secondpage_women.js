import React from 'react'
import './style.css';
import SalonCard from './SalonCard';
import img3 from '../images/homebanner.jpg';

   
const Secondpage_women= () =>{

    return(
        <>
                <div className="image">
                    <img src={img3} style={{
                        height: '300px',
                        width:'100%',
                    }}/>
                    <div className="text2">Welcome to Salons <br/>
                        <p>Browse Your favourite Salon and get quick appointment!</p>
                    </div>
                </div>

            <div className="main">
                <SalonCard />
            </div>
        </>
    )
}

export default Secondpage_women;
