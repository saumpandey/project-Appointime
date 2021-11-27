import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import { BlogApi } from './Api';
import image6 from '../images/blogbackground.jpg';

const Blog = () => {

    return (
        <div>
            <Navbar/>
            <div className="main-blog">

                {BlogApi.map((e) =>{
                    return(
                        <div className="blog-card">
                            <img src={e.img} className="blog-image" />
                            <div className="blog-service">
                                <span className="blog-name">{e.name}</span> <br/>
                                <span className="blog-des">{e.description}</span> <br/>
                                <a href="#" className="blog-link">{e.link}</a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Blog;
