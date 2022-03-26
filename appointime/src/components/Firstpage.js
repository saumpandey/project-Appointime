import React from 'react'
import './style.css';
import image1 from '../images/background.jpg';
import img2 from '../images/shopimage.jpg';
import img3 from '../images/shopimage2.png';
import Footer from './Footer';
import Navbar from './Navbar';
import { Team } from './Api';

function Firstpage(){
    return(
        <div className="App">
            <Navbar/>
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
                        <a href="/products"><button className="view" >View Product</button></a>
                    </div>

                    <div className="shop2">
                        <img src= {img3} className="firstimage" />
                        <div className="category1">Skin Care</div>
                        <a href="/products"><button className="view">View Product</button></a>
                    </div>
            </div>
            
            <div className="heading-about">About Team Member</div>
            <div className="row">
                        {Team.map((e) =>{
                            return(
                                <div className="card-about">
                                   <img src={e.img} className="avatar"></img>
                                    <span className="team-member">{e.name}</span> <br/>
                                    <span className="description-about">{e.description}</span>
                                </div>
                            )
                        })}
            </div>
            <Footer/>
        </div>
    )
}

export default Firstpage;