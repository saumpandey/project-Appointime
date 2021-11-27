import React from "react";
import logo from '../images/Logo.png';
import { FaHome } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import './style.css';

function Footer(){
    return(
        <div class="main-footer">
            <div class="footer">
                <div class="section-1">
                    <img src={logo} style={{
                        height: '280px',
                        width: '260px',
                        margin:'80px 90px',
                    }}/>

                    <div class="article2">
                        <h2>Quick Links</h2>
                        <a href="/"> Home<br/></a>
                        <a href="/salon"> Salon<br/></a>
                        <a href="/spa"> Spa<br/></a>
                        <a href="/blog"> Blog<br/></a>
                    </div>

                    <div class="article3">
                        <h2>Contact Us</h2>
                        <ul>
                           <a href="mailto: thappointime@gmail.com" style={{
                               textDecoration:'none',
                               color:'black'
                           }}> <li>  <FaEnvelope/> theappointime@gmail.com </li> </a>
                           <li> <FaPhoneSquareAlt/> Contact No. 9045414351 </li>
                        </ul>
                    </div>
                </div>

                <div class="section-3">
                    <ul>
                       <li><FaFacebook style={{
                           color: 'blue',
                       }}/></li>
                       <li><FaGoogle style={{
                           color:'red',
                       }} /></li>
                       <li><FaDribbble style={{
                           color:" #ea4c89" ,
                       }} /></li>
                       <li><FaTwitter style={{
                                color:' #55acee',
                       }}/></li>
                    </ul>
                </div>
                
                <div class="section-4">
                    <p>
                        Copyright &copy; 2020 All Rights Reserved by <span>The AppoinTime</span>
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Footer;