import React from "react";
import { MenApi } from "./Api";
import Navbar from "./Navbar";
import "./style.css";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import Footer from "./Footer";
import img3 from "../images/homebanner.jpg";

const Secondpage_men = () => {
  return (
    <div>
      <Navbar />
      <div className="image1">
        <img
          src={img3}
          style={{
            height: "500px",
            width: "100%",
            marginTop: "20px",
            objectFit:'cover',
          }}
        />
        <div className="text2">
          Welcome to Salons <br />
          <p>Browse Your favourite Salon and get quick appointment!</p>
        </div>
      </div>
      
      <div className="men-main">
        {MenApi.map((ele) => {
          return (
            <div className="container-men">
              <img src={ele.img} className="image-spa"></img>
              <div className="card-description">{ele.description}</div>
              <div className="card-review">
                {ele.reviews} <FaStar /> <FaStar /> <FaStar /> <FaStar />{" "}
                <FaStarHalfAlt />{" "}
              </div>
              <div>
                {ele.service.map((e) => (
                  <div className="men-service">
                    <span className="se1">{e.hair}</span> <br />
                    <span className="pr1">{e.priceH}</span> <br />
                    <a href="http://localhost/db.php">
                      <button className="men-btn">{ele.button}</button> <br />
                    </a>
                    <span className="se1">{e.hair2}</span> <br />
                    <span className="pr1">{e.priceH2}</span> <br />
                    <a href="http://localhost/db.php">
                      <button className="men-btn">{ele.button}</button> <br />
                    </a>
                    <span className="se1">{e.face}</span> <br />
                    <span className="pr1">{e.priceF}</span> <br />
                    <a href="http://localhost/db.php">
                      <button className="men-btn">{ele.button}</button> <br />
                    </a>
                    <span className="se1">{e.face2}</span> <br />
                    <span className="pr1">{e.priceF2}</span> <br />
                    <a href="http://localhost/db.php">
                      <button className="men-btn">{ele.button}</button> <br />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>{" "}
      <Footer />
    </div>
  );
};

export default Secondpage_men;
