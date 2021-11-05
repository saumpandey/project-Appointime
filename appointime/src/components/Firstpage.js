import React from 'react'
import styled from 'styled-components';
import img1 from '../images/download.png';
import img2 from '../images/men.jpg';
import img3 from '../images/bgimage2.jpg';
import style from './style.css';
import { Link} from 'react-router-dom';

const Firstdiv = styled.div`
    width: 280px;
    height: 300px;
    background-color: #fff;
    display:flex;
    margin: 10% 25%;
    flex-direction: column;
    border: 2px solid grey;
    border-radius: 19px;
    box-shadow: 10px 10px 10px grey;
    position: absolute;
    overflow: hidden;
`;

const Topcontainer= styled.div`
    width:100px;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0 1.8em;
    padding-bottom: 5em;
    text-align: center;
`;

const Backdrop = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    border-radius: 50%;
    width:160%;
    height: 480px;
    top: -300px;
    left: -70px;
    transform: rotate(60deg);
    background: rgb(241, 196, 15);
    background: linear-gradient(58deg, rgba(241, 196,15,1) 20%, rgba(243,172,18,1) 100%);
`;

const Seconddiv = styled.div`
    width: 280px;
    height: 300px;
    background-color: white;
    display:flex;
    margin: 10% 60%;
    flex-direction: column;
    border: 2px solid grey;
    border-radius: 19px;
    box-shadow: 10px 10px 10px grey;
    position: absolute;
    overflow: hidden;
`;

const Header = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const HederText= styled.h2`
    font-size: 40px;
    position: relative;
    color: white;
    font-weight: 700;
`;

const Image1= styled.img`
   width: 140px;
   height: 130px;
   margin-left: 70px;
   position: relative;
   top:5px;
`;

const Image2= styled.img`
   width: 170px;
   height: 150px;
   margin-left: 70px;
   position: relative;
   top:20px;
`;

const Bg= styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${img3});
`;

const Text = styled.h1`
    font-size: 50px;
    text-align: center;
    font-weight: 600;
    font-family: 'Times New Roman', Times, serif;
`;

const innerText = styled.h2`
    font-size: 30px;
    font-weight: 300;
    text-align: center;
`;

function Firstpage(){
    return(
        <>
            <Bg> <br/> <br/>
                <Text>Welcome to AppoinTime</Text>
                <innerText>Choose your Gender</innerText>
                <Firstdiv>
                    <Link to='/women'></Link>
                    <Topcontainer>
                        <Backdrop /> 
                        <Header>
                            <HederText>Women</HederText>
                        </Header>
                    </Topcontainer> <br />
                    <Image1 src={img1}/>
                </Firstdiv>

                <Seconddiv>
                    <Link to='/men'></Link>
                    <Topcontainer>
                        <Backdrop />
                        <Header>
                            <HederText>Men</HederText>
                        </Header>
                    </Topcontainer>
                    <Image2 src={img2}/>
                </Seconddiv>
            </Bg> 
        </>
    )
}

export default Firstpage;