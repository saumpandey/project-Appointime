import React from 'react'
import './style.css';
import { Link } from 'react-router-dom';
import image1 from '../images/background.jpg';


function Firstpage(){
    return(
        <div className="App">
            <div className="navBar">
                <div className="menu">
                    <ul>
                        <Link to='/'><li>Home</li></Link>
                        <Link to='/products'><li>Shop</li></Link>
                        <Link to='about'><li>About </li></Link>
                        <Link to='contact'><li>Contact</li></Link>
                        <Link to='salon'><li>The Salons</li></Link>
                        
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
            </div>
        </div>
    )
}

export default Firstpage;