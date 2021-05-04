import React from "react";
import "./Blog.css";
import react2 from "../../images/react2.png";
import fire from "../../images/fire.png";
import node1 from "../../images/node1.png";
const Blog = () => {
  return (
    <div className="home container">
      <h1 className="blog my-5">My Blogs</h1>
      <div className="row mx-5 justify-content-center">
        <div className="col-md-4 p-2"  data-aos="flip-left" data-aos-duration="2000">
        <img className="img" src={react2} alt="" srcset="" />
        </div>
        <div className="col-md-4 p-2"  data-aos="flip-left" data-aos-duration="2000">
         <img className="img" src={fire} alt="" srcset="" />
        </div>
        <div className="col-md-4 p-2"  data-aos="flip-left" data-aos-duration="2000">
         <img className="img" src={node1} alt="" srcset="" />
        </div>
      </div>
    </div>
  );
};

export default Blog;
