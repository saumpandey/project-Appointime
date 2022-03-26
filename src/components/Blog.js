import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import { BlogApi } from './Api';
import Feedback from './Feedback';

const Blog = () => {

    return (
        <div>
            <Navbar/>
            <div className="main-blog">
                <div className="margin"></div>

                <div className="parallax">
                        <div className="inner">
                            <h1>TOP 10 IDEAS FOR YOU</h1>
                        </div>

                        <div>
                            {BlogApi.map((e) =>{
                                return(
                                    <div className="inner2">
                                        <img src={e.img} />
                                        <span>{e.name}</span>
                                        <p>{e.description}</p>
                                        <a>{e.link}</a>
                                    </div>
                                )
                            })}
                        </div>
                </div>
                <div className="margin"></div>
            </div>
            <Feedback/>
            <Footer/>
        </div>
    )
}

export default Blog;
